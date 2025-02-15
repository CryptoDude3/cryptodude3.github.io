#include <stdio.h>
#include <stdint.h>
#include <time.h>
#include <emscripten.h>

uint32_t randState[4];

void setSeed(uint32_t time) {
  randState[0] = time;
  randState[1] = randState[0] * 0x6c078965 + 1;
  randState[2] = randState[1] * 0x6c078965 + 1;
  randState[3] = randState[2] * 0x6c078965 + 1;
}

EM_JS(void, console_log_js, (char* a), {
  const output = document.querySelector("#output");
  let div = document.createElement("div");
  div.innerText=UTF8ToString(a);
  output.appendChild(div);
});
EM_JS(int, prompt_int, (char* a), {
  return parseInt(prompt(UTF8ToString(a)));
});

uint32_t randomInt() {
  uint32_t uVar1;
  uint32_t randInt;
  randInt = randState[0] << 11 ^ randState[0];
  randState[0] = randState[1];
  randState[1] = randState[2];
  uVar1 = randState[3];
  randState[2] = uVar1;
  randInt = randInt >> 8 ^ randInt ^ uVar1 ^ uVar1 >> 19;
  randState[3] = randInt;
  return randInt;
}

float randomRange(float min, float max) {
  float randomNumber = (float)(randomInt() & 0x7fffff) * 1.192093e-07f;
  return randomNumber * min + (1.0f - randomNumber) * max;
}

int weightedRandom(float* weights, int amount) {
  float totalWeight = 0;
  for (int i = 0; i < amount; i++) {
    totalWeight += weights[i];
  }
  float random = randomRange(0, totalWeight);
  for (int i = 0; i < amount; i++) {
    if (random < weights[i]) return i;
    random -= weights[i];
  }
  return -1;
}

void rngBurst(int count) {
  for (int i = 0; i < count; i++) randomInt();
}

// ---------------------------------------------------------------------------

void rngBlocks(int count) {
  for (int i = 0; i < count; i++) {
    randomInt();
    randomRange(0.0f, 6.5f);  // Removed printf
  }
}

void straights(int count) {
  for (int i = 0; i < count; i++) {
    randomInt();
  }
}

int slantsNext(int count) {
  for (int i = 0; i < count; i++) {
    float weights[2] = {1.0f, 1.0f};
    int value = weightedRandom(weights, 2);
    switch (value) {
      case 0:
        break;  // Slant left, no printf
      case 1:
        break;  // Slant right, no printf
      case -1:
        return 1;
    }
    randomInt();
  }
  return 0;
}

int slantsLeft(int count) {
  randomInt();
  return slantsNext(count - 1);
}

int slantsRight(int count) {
  randomInt();
  return slantsNext(count - 1);
}

void treblocks(int count) {
  for (int i = 0; i < count; i++) {
    randomRange(-5.0f, 5.0f);  // Removed printf
  }
}

void tunnels(int count) {
  for (int i = 0; i < count; i++) {
    randomRange(-5.0f, 5.0f);  // Removed printf
  }
}

int snakes(int count) {
  randomRange(-5.0f, 5.0f);  // Removed printf
  for (int i = 0; i < count - 1; i++) {
    if (randomRange(0.0f, 1.0f) == 1.0f) {
      return 1;
    }
    randomRange(-5.0f, 5.0f);  // Removed printf
  }
  return 0;
}

void verts(int count) {
  for (int i = 0; i < count; i++) {
    randomRange(-3.0f, 3.0f);  // Removed printf
  }

  rngBurst(count * 45); // 15 int rngs occur when a block moves
}

void hors(int count) {
  float xoffsets[4];
  for (int i = 0; i < count; i++) {
    xoffsets[i] = randomRange(-3.0f, 3.0f);
  }

  randomInt();

  for (int i = 0; i < count; i++) {
    randomRange(0.0f, 3.0f);  // Removed printf
  }

  rngBurst(count * 15); // 15 int rngs occur when a block moves
}

void speedTunnel(int normalTunnelRng) {
  if (normalTunnelRng) randomInt();
}

int generateMapSegment(int segmentNum) {
  int obstacleCount = segmentNum + 1;
  if (obstacleCount > 4) obstacleCount = 4;

  int normalTunnelRng = 1;

  //early obstacles
  float earlyWeights[4] = {1.0f, segmentNum >= 6 ? 0.0f : 1.0f, 0.5f, 0.5f};
  int earlyObstacle = weightedRandom(earlyWeights, 4);
  switch (earlyObstacle) {
    case 0:
      rngBlocks(obstacleCount);
      break;
    case 1:
      straights(obstacleCount);
      break;
    case 2:
      if (slantsLeft(obstacleCount)) return 1;
      break;
    case 3:
      if (slantsRight(obstacleCount)) return 1;
      break;
    case -1:
      return 1;
  }

  if (segmentNum > 0) {
    //middle obstacles
    float middleWeights[3] = {1.0f, 1.0f, segmentNum >= 6 ? 0.0f : 1.0f};
    int middleObstacle = weightedRandom(middleWeights, 3);
    switch (middleObstacle) {
      case 0:
        treblocks(obstacleCount);
        break;
      case 1:
        tunnels(obstacleCount);
        break;
      case 2:
        if (snakes(obstacleCount)) return 1;
        break;
      case -1:
        return 1;
    }

    if (segmentNum  > 1) {
      //late obstacles
      float lateWeights[2] = {1.0f, 1.0f};
      int lateObstacle = weightedRandom(lateWeights, 2);
      switch (lateObstacle) {
        case 0:
          verts(obstacleCount);
          break;
        case 1:
          normalTunnelRng = 0;
          hors(obstacleCount);
          break;
        case -1:
          return 1;
      }
    }
  }

  speedTunnel(normalTunnelRng);

  return 0;
}

int generateMap(int segmentCount) {
  rngBurst(15);

  for (int num = 0; num < segmentCount; num++) {
    if (generateMapSegment(num)) return 1;
  }
  return 0;
}
void console_log(char* a, int b){
char buf[40];
sprintf(&buf,a,b);
console_log_js(buf);
}
int main() {
uint32_t currentTime = time(NULL);
console_log("Current time: %u\n", currentTime);
int speedups = prompt_int("Enter the number of speedups: ");
  //the below code will print the seeds in the first 10 million where the map ends early
  
  int count = 0;
  for (int i = currentTime; i < currentTime + 604800; i++) {
    setSeed(i);
    if (generateMap(speedups)) {
      console_log("FOUND SEED: %d\n", i);
      count++;
    }
  }
  console_log("count of found seeds: %d\n", count);

  return 0;
}