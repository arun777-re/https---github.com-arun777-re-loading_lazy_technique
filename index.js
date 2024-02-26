//  json data containing image Urls
const imageData = [
    {"image":"data:image/jpeg;base64,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"},
    {"image":"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"},
    {"image":"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww"},
    {"image":"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"},
    {"image":"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"},
    {"image":"https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"},
    {"image":"https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"},
    {"image":"https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"},
    {"image":"https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.webp?b=1&s=170667a&w=0&k=20&c=s_sK6EaQV59mnHIarg17WsTH0Xk5B8uPzb9HMiy9OC4="},
    {"image":"https://media.istockphoto.com/id/1486172842/photo/portrait-of-male-nurse-in-his-office.webp?b=1&s=170667a&w=0&k=20&c=X4TGvYkgE0Hqqdwv13z47msgfNAFLH9udGXPzWHlT9A="},
    {"image":"https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww"},
    {"image":"https://media.istockphoto.com/id/1410398449/photo/male-doctor-in-a-medical-clinic-writing-prescription-for-a-young-female-patient.jpg?s=612x612&w=0&k=20&c=z7tK3T6xGxFabmyP438UcTQpsLuVe6cRUegBu9doDzs="},
    {"image":"https://media.istockphoto.com/id/1460982334/photo/portrait-happy-confident-indian-male-and-female-doctors-with-stethoscope-standing-cross-arms.jpg?s=612x612&w=0&k=20&c=fa8MLcyl5N_pyRwzyrSGzX3e-owkyNCpxZiuNlO5McQ="},
    {"image":"https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=LRdV89YOmOit0wRxhLmrisW8I-u2il7WskNL7TVWS9g="},
    {"image":"https://media.istockphoto.com/id/1592709916/photo/happy-smiling-mother-holding-the-baby-during-check-up-in-hospital-ward.jpg?s=612x612&w=0&k=20&c=CkzL6JBigEhgd4jZtvlLHmCUjESXqzO2wSp_wdU1ef8="},
    {"image":"https://media.istockphoto.com/id/1331766486/photo/a-female-doctor-in-a-coat-consults-the-patient-while-holding-the-patients-hand-at-the-table.jpg?s=612x612&w=0&k=20&c=ndDDQrr5LjGSAR0t3rf3Ck2HKRrJyJXpF5qqaSxUVDg="},
    {"image":"https://media.istockphoto.com/id/1496003922/photo/smiling-senior-indian-doctor-with-little-girl-child-patient-undergoing-course-of-chemotherapy.jpg?s=612x612&w=0&k=20&c=JIxWcIi5EqHFkWMKobZ0K0P_X3JlO09_BaC_kZwdnY4="},
    {"image":"https://media.istockphoto.com/id/1419000522/photo/doctors-checking-heartbeat-of-patient-using-stethoscope.jpg?s=612x612&w=0&k=20&c=NT1lqzbAjxcqH8BUesakM4YVEWKk8kcY4bvqebwQF4w="},
    {"image":"https://media.istockphoto.com/id/924663358/photo/doctors-are-using-a-stethoscope-to-check-lungs-and-heart.jpg?s=612x612&w=0&k=20&c=pptLnOE1u8uWWaeEBQcqKGC4CakgXSQdXdIEua4waPM="},
    {"image":"https://media.istockphoto.com/id/1473337705/photo/cheerful-female-doctor-in-white-uniform-holding-clipboard-stock-photo.jpg?s=612x612&w=0&k=20&c=VV0Jw6ipf7sNaTMdwlFtlAGqgU1OFBWe1IaxCsaGtBo="},
    {"image":"https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=mI-MPGA_bHBLK9D77v8shYOZdI7Pqnlh2_xJE00tUHM="},
    {"image":"https://media.istockphoto.com/id/1496002785/photo/group-of-confident-indian-male-and-female-doctors-and-nursing-staff-with-stethoscope-standing.jpg?s=612x612&w=0&k=20&c=dtKQEeihcXU-CqzKxv_WOAao9aDTrrUsxc_DAInEbac="},
    {"image":"https://media.istockphoto.com/id/1730224172/photo/happy-doctor-pointing-with-finger-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=rqGIO0yKzz_LK4Fr0VKWDL5FEepgTjJlJs8V3wjvpvc="},
    {"image":"https://media.istockphoto.com/id/1826004997/photo/young-indian-pregnant-woman-with-female-doctor-examining-and-listening-babys-heartbeat-using.jpg?s=612x612&w=0&k=20&c=1lNCGm0kLZU_6Sv8fqQA4VHUex4SW0kuxaxjW-8aMbA="},
    {"image":"https://media.istockphoto.com/id/512817582/photo/female-orthopedics-doctor-holding-and-looking-at-x-ray-image.jpg?s=612x612&w=0&k=20&c=-Js_bSZKkdSAYlZQqAvvATuSlONXPWXEOjr51quznsc="}
    ];
    
    // function to load images on the page
    const loadImages = ()=>{
        // Accesing the main div with id imageContainer
        const container = document.getElementById('imageContainer');
        imageData.forEach(item => {
            // create the new img element inside the div using createElement method
            const imgElement = document.createElement('img')
            imgElement.src = item.image;
            imgElement.alt = 'Image...';
            const imageItem = document.createElement('div');
            // give the classname to the div using classList.add method
            imageItem.classList.add('image-item');
            // entering the img element to div & then this div to main div using append method
            imageItem.appendChild(imgElement);
            container.appendChild(imageItem)
    
        })
    
    }
    
    
    
    // Load the images when the page is loaded
    // this is called the lazy technique of uploading
    window.onload = loadImages;
    
    