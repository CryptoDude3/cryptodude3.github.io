const barWidth = 30;
const startX = 0;
const gap = 10;
const canvas = document.getElementById('drawbarsCanvas');
const ctx = canvas.getContext('2d');
// Function to draw drawbars on the canvas
function drawDrawbars(context, drawbarValues) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  var drwbcolors = ["#964b00", "#964b00", "#dddddd", "#dddddd", "#000000", "#dddddd", "#000000", "#000000", "#dddddd"];
  var drwbtxt = ["white", "white", "black", "black", "white", "black", "white", "white", "black"];
  for (let i = 0; i < drawbarValues.length; i++) {
    const x = startX + i * (barWidth + gap);
    const height = (drawbarValues[i] / 8) * ctx.canvas.height;

    // Drawbar color
    ctx.fillStyle = drwbcolors[i];
    ctx.fillRect(x, 0, barWidth, height);

    // Drawbar outline
    ctx.strokeStyle = "#000";
    ctx.strokeRect(x, 0, barWidth, height);

    // Draw numbers on the drawbar (inverted)
    const fontSize = 12;
    ctx.fillStyle = "#000";
    ctx.font = `${fontSize}px Arial`;

    for (let j = drwbvals[i]; j > 0; j--) {
      const textX = x + barWidth / 2 - fontSize / 4;
      const textY = (j / 8) * ctx.canvas.height - 15 + fontSize / 2;
      ctx.fillStyle = drwbtxt[i];
      ctx.fillText((drwbvals[i] - j) + 1, textX, textY);
    }
  }
}

drawDrawbars(ctx, drwbvals);

// Variables to keep track of drag state
let isDragging = false;
let draggedIndex = -1;

// Function to handle drag and drop events
function handleDrag(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;


  if (draggedIndex !== -1) {
    const i = draggedIndex;
    const x = startX + i * (barWidth + gap);

    // Calculate the value based on the mouse position
    const newValue = (mouseY / ctx.canvas.height) * 8;

    // Ensure the value is within the allowed range (0 to 8)
    drwbvals[i] = Math.min(8, Math.max(0, Math.round(newValue)));
    updateDrwb(drwbvals);
    drawDrawbars(context, drwbvals);
  }
}

// Add event listeners for drag and drop at the document level
document.addEventListener('mousedown', (e) => {
  if (e.target === canvas) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;


    for (let i = 0; i < drwbvals.length; i++) {
      const x = startX + i * (barWidth + gap);

      if (mouseX >= x && mouseX <= x + barWidth && mouseY >= 0 && mouseY <= ctx.canvas.height) {
        isDragging = true;
        draggedIndex = i;
        break;
      }
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggedIndex = -1;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    handleDrag(e);
  }
});