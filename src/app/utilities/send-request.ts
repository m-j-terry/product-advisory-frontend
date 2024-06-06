import axios from 'axios';

export async function generateToken(inquiry:{ clientFirstName:string, clientLastName:string, clientPhoneNumber:string, clientEmail:string, clientEmailRepeat:string, clientCompany:string, clientLinkedIn:string, inquirySubject:string, inquiryMessage:string }){
    return axios.post(process.env.NEXT_PUBLIC_BACKEND_URL, inquiry)  
    .then(response => {
        // Handle successful response
        console.log('Response:', response.data);
    }) 
    .catch(error => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
            console.error('Server Error:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an error
            console.error('Request setup error:', error.message);
        }

        // Handle network error
        if (error.message === 'Network Error') {
            console.error('Network Error:', error.message);
          // You can perform additional actions here, such as displaying a message to the user or retrying the request.
        }
    })
}