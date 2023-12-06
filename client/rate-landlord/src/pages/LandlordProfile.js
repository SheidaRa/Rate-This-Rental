// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
// import './CSS/LandlordProfile.css'


// export default function LandlordProfile() {
//   return (
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="9" xl="7">
//             <MDBCard>
//               <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
//                 <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
//                   <MDBCardImage src="/"
//                     alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
//                   <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
//                     Edit profile
//                   </MDBBtn>
//                 </div>
//                 <div className="ms-3" style={{ marginTop: '130px' }}>
//                   <MDBTypography tag="h5">John doe</MDBTypography>
//                   <MDBCardText>New York</MDBCardText>
//                 </div>
//               </div>
//               <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
//                 <div className="d-flex justify-content-end text-center py-1">
//                   <div>
//                     <MDBCardText className="mb-1 h5">253</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">properties</MDBCardText>
//                   </div>
//                   <div className="px-3">
//                     <MDBCardText className="mb-1 h5">1026</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">ratings</MDBCardText>
//                   </div>
//                   <div>
//                     <MDBCardText className="mb-1 h5">478</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">stars</MDBCardText>
//                   </div>
//                 </div>
//               </div>
//               <MDBCardBody className="text-black p-4">
//                 <div className="mb-5">
//                   <p className="lead fw-normal mb-1">About</p>
//                   <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
//                     <MDBCardText className="font-italic mb-1">Landlord </MDBCardText>
//                     <MDBCardText className="font-italic mb-1">Lives in MN</MDBCardText>
//                     <MDBCardText className="font-italic mb-0">I like to keep deposits yum yum</MDBCardText>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <MDBCardText className="lead fw-normal mb-0">Properties</MDBCardText>
//                   <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
//                 </div>
//                 <MDBRow>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="/"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//   );
// }


import React from 'react';
// import './CSS/LandlordProfile.css';


const LandlordProfile = () => {
  const profile = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150',
    properties: [
      { name: 'Property 1', image: 'https://via.placeholder.com/150' },
      { name: 'Property 2', image: 'https://via.placeholder.com/150' },
      // Add more properties as needed
    ],
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    numberOfProperties: 5,
    numberOfReviews: 10,
    averageRating: 4.5,
  };

  return (
    <div className="container">
      <header>
        <h1>{profile.name}'s Profile</h1>
      </header>
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={profile.profilePic} alt="Profile" className="img-fluid" />
          <div className="mt-3">
            <h5>Number of Properties: {profile.numberOfProperties}</h5>
            <h5>Number of Reviews: {profile.numberOfReviews}</h5>
            <h5>Average Rating: {profile.averageRating}</h5>
          </div>
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>{profile.aboutMe}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Properties</h2>
          <div className="row">
            {profile.properties.map((property, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <img src={property.image} className="card-img-top" alt={`Property ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{property.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordProfile;
