const textArray1 = ["Basic", "Pro", "Premium"];
const textArray2 = ["Starter", "Advanced", "Ultimate"];
const textArray3 = ["Entry", "Growth", "Elite"];
let currentIndex1 = 0,
  currentIndex2 = 0,
  currentIndex3 = 0;
let currentText1 = "",
  currentText2 = "",
  currentText3 = "";
let isDeleting1 = false,
  isDeleting2 = false,
  isDeleting3 = false;

const typewriterElement1 = document.getElementById("typewriter1");
const typewriterElement2 = document.getElementById("typewriter2");
const typewriterElement3 = document.getElementById("typewriter3");

function type(
  typewriterElement,
  textArray,
  currentIndex,
  currentText,
  isDeleting
) {
  const currentWord = textArray[currentIndex];

  if (isDeleting) {
    currentText = currentWord.substring(0, currentText.length - 1);
  } else {
    currentText = currentWord.substring(0, currentText.length + 1);
  }

  typewriterElement.textContent = currentText;

  // Speed control
  let speed = 150;
  if (isDeleting) {
    speed /= 2;
  }

  // Check if word is complete
  if (!isDeleting && currentText === currentWord) {
    speed = 2000; // Pause before starting to delete
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textArray.length;
    speed = 500; // Pause before starting the next word
  }

  setTimeout(
    () =>
      type(typewriterElement, textArray, currentIndex, currentText, isDeleting),
    speed
  );
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(
    () =>
      type(
        typewriterElement1,
        textArray1,
        currentIndex1,
        currentText1,
        isDeleting1
      ),
    500
  );
  setTimeout(
    () =>
      type(
        typewriterElement2,
        textArray2,
        currentIndex2,
        currentText2,
        isDeleting2
      ),
    500
  );
  setTimeout(
    () =>
      type(
        typewriterElement3,
        textArray3,
        currentIndex3,
        currentText3,
        isDeleting3
      ),
    500
  );
});
