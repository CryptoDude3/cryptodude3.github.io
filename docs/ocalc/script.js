    let scale = 20; // Default grid scale
    let zoom = 1; // Default zoom level
    let angles = [117, 24, 246];
    let dist = [46, 34, 67];
    function deg(x, y) {
      var radius = Math.sqrt(x * x + y * y);
      var radians = Math.atan2(x, y);
      var degrees = radians * (180 / Math.PI);
      if (degrees < 0) {
        degrees += 360;
      }
      degrees = Math.round(degrees);
      return {d: degrees, r: radius};
    }

    function calculateCoords(angles, distances, scale = 1) {
      if (angles.length !== distances.length) {
        throw new Error("Angles and distances must have the same length");
      }

      let x = 0;
      let y = 0;
      const coordinates = [{x: 0, y: 0}];

      for (let i = 0; i < angles.length; i++) {
        const angle = angles[i];
        const radius = distances[i];
        const radians = (angle * Math.PI) / 180;
        x += radius * Math.sin(radians) * scale;
        y += radius * Math.cos(radians) * scale;
        coordinates.push({x: Number(x.toFixed(2)), y: Number(y.toFixed(2))});
      }

      return coordinates;
    }
    let points = calculateCoords(angles, dist);
    // Function to render points on the canvas
    function renderPoints() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get the scale and zoom values from the inputs
      scale = parseInt(document.getElementById('scale').value);
      zoom = parseInt(document.getElementById('zoom').value) / 50;

      // Calculate the canvas center
      const centerX = (canvas.width / 2);
      const centerY = (canvas.height / 2);

      // Draw the grid
      ctx.strokeStyle = 'lightgray';
      pscale = parseInt(document.getElementById("pscale").value);
      // Draw vertical lines
      for (let x = -centerX * zoom; x <= centerX * zoom; x += scale * zoom) {
        ctx.beginPath();
        ctx.moveTo(centerX + x, 0);
        ctx.lineTo(centerX + x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -centerY * zoom; y <= centerY * zoom; y += scale * zoom) {
        ctx.beginPath();
        ctx.moveTo(0, centerY + y);
        ctx.lineTo(canvas.width, centerY + y);
        ctx.stroke();
      }

      // Draw the coordinate numbers
      ctx.fillStyle = 'black';
      ctx.font = '10px sans-serif';
      const xOffset = -4;
      const yOffset = 5;
      const labelOffset = 5;
      // Draw x-axis numbers
      for (let x = -centerX * zoom; x <= centerX * zoom; x += scale * zoom) {
        ctx.fillText(
          (x / zoom).toFixed(0),
          centerX + x + xOffset,
          centerY + 5
        );
      }

      // Draw y-axis numbers
      for (let y = -centerY * zoom; y <= centerY * zoom; y += scale * zoom) {
        ctx.fillText(
          (-y / zoom).toFixed(0),
          centerX + yOffset,
          centerY + y + yOffset
        );
      }

      // Draw the points
      ctx.fillStyle = 'red';
      let p = 0;
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(
          centerX + point.x * zoom * pscale,
          centerY - point.y * zoom * pscale,
          4,
          0,
          Math.PI * 2
        );
        ctx.fill();
        if (p > 0) {
          ctx.strokeStyle = "red";
          ctx.beginPath();
          ctx.moveTo(centerX + points[p].x * zoom * pscale, centerY - points[p].y * zoom * pscale);
          ctx.lineTo(centerX + points[p - 1].x * zoom * pscale, centerY - points[p - 1].y * zoom * pscale);
          ctx.stroke();
        }
        p++;
      });
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(centerX + points[points.length - 1].x * zoom * pscale, centerY - points[points.length - 1].y * zoom * pscale);
      ctx.lineTo(centerX + 0 * zoom * pscale, centerY - 0 * zoom * pscale);
      ctx.stroke();
    }
    function reCalc() {
      points = calculateCoords(angles, dist); renderPoints();
      const final = deg(points[points.length - 1].x, points[points.length - 1].y);
      document.getElementById("result").innerHTML = "You will have to go " + final.r.toFixed(1) + " feet facing " + final.d.toFixed(1) + " degrees approximately to reach your destination.";
    }
    // Call the renderPoints function initially
    reCalc();