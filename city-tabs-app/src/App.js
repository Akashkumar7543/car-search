import React, { useState } from 'react';


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

const carsData = [
  { id: 1, name: 'Nissan Rogue', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/Nissan Rogue.jpeg" },
  { id: 2, name: 'BMW 3 Series', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 980', month: '/month', year:'2022',image: "./img/bmw-offer.jpg" },
  { id: 3, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 4, name: 'Mustnag', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mustnag.jpeg" },
  { id: 5, name: 'chevrolette', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/chevrolette.jpg" },
  { id: 6, name: 'Mercedes S1', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 680', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 7, name: 'Volkswagen Golf', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 740', month: '/month', year:'2023',image: "./img/Volkswagen Golf.jpeg" },
  { id: 8, name: 'Audi', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 460', month: '/month', year:'2022',image: "./img/Audi A4.jpeg" },
  { id: 9, name: 'Hyundai Sonata', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/Hyundai Sonata.jpeg" },
  { id: 10, name: 'Kia Optima', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 340', month: '/month',year:'2019', image: "./img/Kia Optima.jpeg" },
  { id: 11, name: 'Audi A4', gasoil: ' Hybrid', speed: ' 6.1km/1-litre', price: '$ 460', month: '/month',year:'2023', image: "./img/Audi A4.jpeg" },
  { id: 12, name: 'Lexus ES', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/Lexus ES.jpeg" },
  { id: 13, name: 'Mazda3', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/Mazda3.jpeg" },
  { id: 14, name: 'Tesla Model S', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 440', month: '/month', year:'2022',image: "./img/Tesla Model 3 Long Range.jpeg" },
  { id: 15, name: 'Jeep Wrangler', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/offer-toyota.png" },
  { id: 16, name: 'Dodge Charger', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/Dodge Charger.jpeg" },
  { id: 17, name: 'Audi S10', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/Audi A4.jpeg" },
  { id: 18, name: 'GMC Sierra', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 680', month: '/month', year:'2020',image: "./img/GMC Sierra.jpeg" },
  { id: 19, name: 'BMW', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 740', month: '/month', year:'2023',image: "./img/bmw-offer.jpg" },
  { id: 20, name: 'chevrolette', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/chevrolette.jpg" },
  { id: 21, name: 'BMW Xi2', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/bmw-offer.jpg" },
  { id: 22, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 23, name: 'Mustnag', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mustnag.jpeg" },
  { id: 24, name: 'Land Rover Discovery', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 25, name: 'BMW S10', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/nissan-offer.png" },
  { id: 26, name: 'BMW D12', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 440', month: '/month', year:'2022',image: "./img/bmw-offer.jpg" },
  { id: 27, name: 'Nissan Rogue', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/Nissan Rogue.jpeg" },
  { id: 28, name: 'Alto', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mercedes-offer.png" },
  { id: 29, name: 'Mustnag', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mustnag.jpeg" },
  { id: 30, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 31, name: 'Mustnag', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mustnag.jpeg" },
  { id: 32, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 33, name: 'Tesla', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/Tesla Roadster (2nd generation).jpeg" },
  { id: 34, name: 'Tesla', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 340', month: '/month',year:'2019', image: "./img/Tesla Roadster (2nd generation).jpeg" },
  { id: 35, name: 'BMW 520i', gasoil: ' Hybrid', speed: ' 6.1km/1-litre', price: '$ 460', month: '/month',year:'2023', image: "./img/BMW 520i.jpeg" },
  
  { id: 37, name: 'BMW 120d', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/BMW 120d.jpeg" },
  { id: 38, name: 'Tesla Model S', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/Tesla Model S.jpeg" },
  { id: 39, name: 'BMW X1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 440', month: '/month', year:'2022',image: "./img/BMW 120i.jpeg" },
  { id: 40, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 41, name: 'Tesla Model X', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/Tesla Model X.jpeg" },
  { id: 42, name: 'Jeep', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/Jeep Wrangler.jpeg" },
  { id: 43, name: 'Kia', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 680', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 44, name: 'Toyta', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 740', month: '/month', year:'2023',image: "./img/Jeep Wrangler.jpeg" },
  { id: 45, name: 'BMW 120i', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 460', month: '/month', year:'2022',image: "./img/mercedes-offer.png" },
  { id: 46, name: 'Tesla Model 3', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/mercedes-offer.png" },
  { id: 47, name: 'Tesla S1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 340', month: '/month',year:'2019', image: "./img/mercedes-offer.png" },
  { id: 48, name: 'Tesla Model 3 Long Range', gasoil: ' Hybrid', speed: ' 6.1km/1-litre', price: '$ 460', month: '/month',year:'2023', image: "./img/mercedes-offer.png" },
  { id: 49, name: 'Car 1', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/BMW 320i.jpeg" },
  { id: 50, name: 'BMW 320d', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/nissan-offer.png" },
  { id: 60, name: 'BMW', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 440', month: '/month', year:'2022',image: "./img/bmw-offer.jpg" },
  { id: 61, name: 'BMW', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/offer-toyota.png" },
  { id: 62, name: 'Honda Civic', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/civic-exterior-right-front-three-quarter-148155.jpeg" },
  { id: 63, name: 'Tesla S1', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/Tesla Model 3 Performance.jpeg" },
  { id: 64, name: 'Car 1', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 680', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 65, name: 'Car 1', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 740', month: '/month', year:'2023',image: "./img/Tesla Model 3 Performance.jpeg" },
  { id: 66, name: 'Car 1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 460', month: '/month', year:'2022',image: "./img/BMW 320i.jpeg" },
  { id: 67, name: 'Tesla Model S Plaid', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/mercedes-offer.png" },
  { id: 68, name: 'Tesla S1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 340', month: '/month',year:'2019', image: "./img/Tesla Model 3 Performance.jpeg" },
  { id: 69, name: 'Car 1', gasoil: ' Hybrid', speed: ' 6.1km/1-litre', price: '$ 460', month: '/month',year:'2023', image: "./img/BMW 320i.jpeg" },
  { id: 70, name: 'Car 1', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 71, name: 'BMW', people: '', gasoil: ' Gasoil', automatic: '', speed: ' 6.1km/1-litre', price: '$ 440', month: '/month', year:'2021',image: "./img/nissan-offer.png" },
  { id: 72, name: 'BMW', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 440', month: '/month', year:'2022',image: "./img/bmw-offer.jpg" },
  { id: 73, name: 'BMW 520d', gasoil: ' Hybrid', speed: ' 8.5km/1-litre', price: '$ 780', month: '/month', year:'2023',image: "./img/offer-toyota.png" },
  { id: 74, name: 'Tesla S1', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 480', month: '/month',year:'2019', image: "./img/mercedes-offer.png" },
  { id: 75, name: 'Car 1', gasoil: ' Hybrid', speed: ' 9.1km/1-litre', price: '$ 740', month: '/month', year:'2021',image: "./img/mercedes-offer.png" },
  { id: 76, name: 'Tesla Model 3 Standard Range', gasoil: ' Gasoil', speed: ' 6.7km/1-litre', price: '$ 680', month: '/month', year:'2020',image: "./img/mercedes-offer.png" },
  { id: 77, name: 'Car 1', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 740', month: '/month', year:'2023',image: "./img/mercedes-offer.png" },
  { id: 78, name: 'Car 1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 460', month: '/month', year:'2022',image: "./img/mercedes-offer.png" },
  { id: 79, name: 'BMW 220d', gasoil: ' Hybrid', speed: ' 8.1km/1-litre', price: '$ 980', month: '/month', year:'2023',image: "./img/Tesla Model 3 Performance.jpeg" },
  { id: 80, name: 'Car 1', gasoil: ' Gasoil', speed: ' 9.5km/1-litre', price: '$ 340', month: '/month',year:'2019', image: "./img/mercedes-offer.png" },
  { id: 81, name: 'Car 1', gasoil: ' Hybrid', speed: ' 6.1km/1-litre', price: '$ 460', month: '/month',year:'2023', image: "./img/Tesla Model 3 Performance.jpeg" },
  { id: 82, name: 'Tesla Model Y', gasoil: ' Gasoil', speed: ' 9.1km/1-litre', price: '$ 820', month: '/month', year:'2020',image: "./img/BMW 320i.jpeg" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const ITEMS_PER_PAGE = 6;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentCars = filteredCars.slice(startIndex, endIndex);

  
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">

      <header className="my-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search cars by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <main>
        <div className="row">
          {currentCars.map((car) => (
            <div key={car.id} className="col-md-4">
              <div className="card mb-4">
              <div class="card">
                <img src={car.image} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <div class="card-body">
                  <h6 className="year">{car.year}</h6>
                    <h5 className="card-title">{car.name}</h5>
                    <p className="card-text">{car.description}</p>


                    <p className="card-text"><i class="bi bi-people-fill"></i> 4 people{car.people}</p>
                    <p className="gasoil"><i class="bi bi-fuel-pump"></i>{car.gasoil}</p>
                    <p className="automatic"><i class="bi bi-car-front"></i> Automatic{car.automaticl}</p>
                    <p className="speed"><i class="bi bi-speedometer"></i>{car.speed}</p>
                    <p className="heart"><i class="bi bi-suit-heart"></i></p>
                    <hr style={{ marginTop: '-30px' }} />
                    <p className="price">{car.price}</p>
                    <p className="month">{car.month}</p>
                    
                    <a href="/some-page " class="btn btn-primary">Rent Now</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </main>
      <footer className="my-4">
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages > 10 ? 10 : totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
