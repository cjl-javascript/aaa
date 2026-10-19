(function () {
  "use strict";
  var modal = document.getElementById("lead-modal");
  var form = document.getElementById("lead-form");
  var formContent = document.getElementById("form-content");
  var successContent = document.getElementById("success-content");
  var title = document.getElementById("form-title");
  var kicker = document.getElementById("form-kicker");
  var intentField = document.getElementById("intent-field");
  var lastTrigger = null;

  function openModal(intent, trigger) {
    lastTrigger = trigger || null;
    intentField.value = intent;
    kicker.textContent = intent === "测评" ? "国内备考入口" : "两地衔接规划";
    title.textContent = intent === "测评" ? "预约备考情况评估" : "咨询中日衔接规划";
    formContent.hidden = false;
    successContent.hidden = true;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    setTimeout(function () { document.querySelector("#lead-form input[name=name]").focus(); }, 0);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll(".js-open-form").forEach(function (button) {
    button.addEventListener("click", function () { openModal(button.dataset.intent || "测评", button); });
  });
  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("success-close").addEventListener("click", closeModal);
  modal.addEventListener("mousedown", function (event) { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape" && !modal.hidden) closeModal(); });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    /*
      正式接入接口时，请把下方演示逻辑替换为 fetch() 请求，例如：
      fetch('/api/leads', { method:'POST', body:new FormData(form) })
      成功后再显示 successContent。切勿把接口密钥写在本文件中。
    */
    formContent.hidden = true;
    successContent.hidden = false;
  });
})();
