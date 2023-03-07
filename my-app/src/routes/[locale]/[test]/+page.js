import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {

  console.log(params)
  
  if (params.locale === 'th') {
    return {
      title: 'th',
     
    };
    
  }
 
  return {
    title: 'en',
   
  };
}


