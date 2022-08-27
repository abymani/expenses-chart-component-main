

$(document).ready(function(){
  const values = [20.21,33.67,52.36,31.07,27.54,45.98,29.05];
    
    for(let i=0; i<values.length ;i++)
    {
      $(`.text${i+1}`).parent().css("height",`${balanceToLength(values[i])}rem`);
      $(`.text${i+1}`).text(`$${values[i]}`);
    }


     // Finding and setting highest value bar to a different color 
     //and also setting its hover state
    let index= findHighestNumberIndex(values);
    $(`.text${index+1}`).parent().css("background-color", "hsl(186, 34%, 60%)");
    $(`.text${index+1}`).parent().hover(function(){
      $(this).css("background-color","hsla(186, 34%, 60%,.6)")
    });
    $(`.text${index+1}`).parent().mouseleave(function(){
      $(this).css("background-color","hsl(186, 34%, 60%)")
    });
  
  
  //converting balance into bar length
  
  function balanceToLength(num){
  
    if(num<91){
      return num/9;
    }
    else {
      return undefined;
    }
  }
  function findHighestNumberIndex(nums){
    let greatest=0;
    for(let i=0; i<nums.length ;i++){
      if(nums[i]>greatest){
        greatest = nums[i];
      }
    }
    return nums.indexOf(greatest);
  }
});