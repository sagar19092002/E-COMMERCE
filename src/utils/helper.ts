import React from 'react';

export const validateEmail = (email:string):boolean => {
  if(email.length===0)
      return true;
    var regx = new RegExp("^([a-zA-Z0-9.]+@+[a-zA-Z]+(.)+[a-zA-Z]{2,})?$");
    return regx.test(email);
  };

export const validatePassword=(password:string):boolean=>{
  let numberCount=0;
  let specialCharCount=0;
  let smallCharCount=0;
  let capitalCharCount=0;
  let specialChar='!@#$%^&*()_+{}[]:;?';
  for(let i:number=0;i<password.length;i++)
    {
      if(password[i]>='a' && password[i]<='z')
          smallCharCount++;
      if(password[i]>='A' && password[i]<='Z')
          capitalCharCount++;
      if(password[i]>='0' && password[i]<='9')
          numberCount++;
      if(specialChar.includes(password[i]))
          specialCharCount++;
    }

    if(smallCharCount>=1 && capitalCharCount>=1 && numberCount>=1 && specialCharCount>=1 && password.length>=8 && password.length<=15)
        return true;
    return false;
}

export const validateNumeric=(numeric:number):boolean=>{
  return !isNaN(numeric)
}


