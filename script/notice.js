function notice() {
  const noticeURL = {
    title: "Notice:",
    text: "Namaz Shab E Mehraj (9:00) ada hongi, Inshallah",
  };
  const notice = document.querySelector(".notices-content");

  const noticeData = ` <div class="notice">
      <h4>${noticeURL.title}</h4>
      <p>
        ${noticeURL.text}
      </p>
      </div>`;
    if (noticeURL.title) {
        notice.innerHTML = noticeData;
    }
}

notice();
