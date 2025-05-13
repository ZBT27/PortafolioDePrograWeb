window.addEventListener('DOMContentLoaded', function () {
  const facturaBtn = document.querySelector('.factura');

  if (facturaBtn) {
    facturaBtn.addEventListener('click', async function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const nombre = document.getElementById('nombre').value || '(no especificado)';
      const correo = document.getElementById('correo').value || '(no especificado)';
      const telefono = document.getElementById('telefono').value || '(no especificado)';
      const comentarios = document.getElementById('comentarios').value || '(sin comentarios)';

      const productosSeleccionados = Array.from(document.querySelectorAll('input[name="producto[]"]:checked'))
        .map(el => `- ${el.parentElement.textContent.trim()}`)
        .join('\n') || '(ninguno)';

      doc.setFontSize(16);
      doc.text("Comprobante de Registro - MoritaSLP", 20, 20);
      doc.setFontSize(12);
      doc.text(`Nombre: ${nombre}`, 20, 40);
      doc.text(`Correo: ${correo}`, 20, 50);
      doc.text(`Teléfono: ${telefono}`, 20, 60);
      doc.text("Productos seleccionados:", 20, 75);
      doc.text(productosSeleccionados, 30, 85);
      doc.text("Comentarios adicionales:", 20, 115);
      doc.text(doc.splitTextToSize(comentarios, 160), 30, 125);

      doc.save("comprobante_morita.pdf");
    });
  }
});
