/* ==========================================================================
   SEOUL BUY BANNER STUDIO INTERACTIVE SCRIPT
   ========================================================================== */

function setDeviceMode(mode) {
  const frame = document.getElementById('bannerFrame');
  const btns = document.querySelectorAll('.device-btn');

  // Remove existing mode classes
  frame.classList.remove('mode-fluid', 'mode-desktop', 'mode-tablet', 'mode-mobile');
  frame.classList.add(`mode-${mode}`);

  // Update active state on toolbar buttons
  btns.forEach(btn => {
    if (btn.getAttribute('data-mode') === mode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  showToast(`Chuyển chế độ xem: ${mode.toUpperCase()}`);
}

function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Đã sao chép mã ưu đãi: ${code}`);
  }).catch(() => {
    // Fallback for older browsers
    const tempInput = document.createElement('input');
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(`Đã sao chép mã ưu đãi: ${code}`);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  
  if (toastText) toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function openExportModal() {
  const modal = document.getElementById('exportModal');
  const textArea = document.getElementById('codeTextArea');
  
  const bannerHTML = document.getElementById('seoulBuyBanner').outerHTML;
  
  // Construct clean embed code with inline styles or link to CSS
  const fullCode = `<!-- SEOUL BUY RESPONSIVE HTML BANNER -->
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/lucide@latest"><\/script>

${bannerHTML}

<script>
  if (window.lucide) lucide.createIcons();
<\/script>`;

  textArea.value = fullCode;
  modal.classList.add('open');
}

function closeExportModal() {
  const modal = document.getElementById('exportModal');
  modal.classList.remove('open');
}

function copyModalCode() {
  const textArea = document.getElementById('codeTextArea');
  textArea.select();
  document.execCommand('copy');
  showToast('Đã sao chép toàn bộ mã HTML/CSS Banner vào Khay nhớ tạm!');
  closeExportModal();
}

function copyBannerHTML() {
  openExportModal();
  copyModalCode();
}
