let steps = document.querySelector("#steps");
let wizards = [
  {
    complete: false,
    number: 1,
    title: "상담 및 예약",
    text: "문의를 남겨주시면 직거래카닷컴에서 연락드려\n방문스케줄을 예약해 드립니다.",
  },
  {
    complete: false,
    number: 2,
    title: "방문견적 및 가격상담",
    text: "담당자 방문을 통해 가격 상담 및 차량 거래가 진행됩니다.",
  },
  {
    complete: false,
    number: 3,
    title: "차량대금 송금",
    text: "계약서 작성 후 차량 대금을 송금해 드립니다.",
  },
  {
    complete: false,
    number: 4,
    title: "차량이동",
    text: "입금이 확인되면 탁송기사를 통해 고객님의 차량을 당사로 이동합니다.",
  },
  {
    complete: false,
    number: 5,
    title: "명의변경(소유권 이전)",
    text: "당일 또는 늦어도 익일까지 차량 소유권 변경을 통해 가장 안전한 중고차 거래를 책임지겠습니다.",
  },
];

let tickIcon = `<svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />`;

steps.innerHTML = wizards
  .map(function (wizard) {
    return (
      `<div class='step'>` +
      `<div class='number ${wizard.complete && "completed"}'>` +
      (wizard.complete ? tickIcon : wizard.number) +
      `</div>` +
      `<div class='info'>` +
      `<p class='title'>${wizard.title}</p>` +
      `<p class='text'>${wizard.text}</p>` +
      "</div>" +
      "</div>"
    );
  })
  .join("");
