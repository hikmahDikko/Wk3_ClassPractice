function mostOccurence(text){
  let freq = [text.length]; 

  let minChar = text.charAt(0);
  let maxChar ;
  
  let i,j,min,max;

  let word = text.split("");

  for(i = 0; i < word.length; i++){
    freq[i] = 1;
    for(j = i + 1; j < word.length; j++){
      if(word[i] == word[j] && word[i] != '' &&
         word[i] != '0'){
            freq[i]++;  
            word[j] = '0';  
      }
    }
  }
  min = max = freq[0];  
    for(i = 0; i < freq.length; i++) {
      if(min > freq[i] && freq[i] != '0') {  
            min = freq[i];  
            minChar = word[i];  
        }
      if(max < freq[i]) {  
            max = freq[i];  
            maxChar = word[i];  
        }  
    }
    console.log("Minimum occurring character: " +
             minChar);  
    console.log("Maximum occurring character: " +
              maxChar);  
          
}

mostOccurence("sweet");