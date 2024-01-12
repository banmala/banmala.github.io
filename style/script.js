//For Testimonial Slider with control
function sliderFunc() {
  let sliderBox = document.querySelector('.slider');
  let tapToRightBtn = document.querySelector('#testimonial_next');
  let tapToLeftBtn = document.querySelector('#testimonial_prev');
  const childCount = sliderBox.childElementCount;
  const slideWidth = 530;
  const element = document.getElementById("testimonial-gallery");
  const containerWidth = element.getBoundingClientRect().width;
  const sliderWidth = childCount * slideWidth;
  let index = 0;
  sliderBox.style.width = `${sliderWidth}px`;
  sliderBox.style.left = '0px';
  function sliderNext() {
    let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace('px', '')) : 0;
    let nextLeftPosition = currentLeftPosition;
      if(sliderWidth>containerWidth && sliderWidth-Math.abs(currentLeftPosition)-containerWidth>slideWidth){
        nextLeftPosition = currentLeftPosition - slideWidth;
      }else if(sliderWidth>containerWidth){
        nextLeftPosition = currentLeftPosition - (sliderWidth-Math.abs(currentLeftPosition)-containerWidth);
      }
      sliderBox.style.left = `${nextLeftPosition}px`;
  }
  function sliderPrev() {
    let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace('px', '')) : 0;
    if(Math.abs(currentLeftPosition)>slideWidth){
      nextLeftPosition = currentLeftPosition + slideWidth;
    }else{
      nextLeftPosition = currentLeftPosition + Math.abs(currentLeftPosition);
    }
    sliderBox.style.left = `${nextLeftPosition}px`;
  }
  tapToRightBtn.addEventListener('click', sliderNext);
  tapToLeftBtn.addEventListener('click', sliderPrev);
}
sliderFunc();