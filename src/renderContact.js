export default function renderContact() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="contact">
      <h1>Contact us</h1>
      <div class="contact-main">
          <div class="contact-left">
              <p>If you wish to speak to a reservationist, please call</p>
              <p class="contact-number">123-456-789</p>
          </div>
          <div class="contact-right">
              <p>Also, feel free to send us an email!</p>
              <form id="message-form">
                  <input type="email" name="email" id="email" placeholder="Email goes here">
                  <textarea name="mail-content" id="mail-content"
                      placeholder="Message goes here"></textarea>
                  <button id="send-message-button">Send</button>
              </form>
          </div>
      </div>
    </div>`;
}
