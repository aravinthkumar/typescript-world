function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  let vb = sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });

   console.log(vb);

   let responses: any = {data:'Hi there!'};
   console.log(responses);
