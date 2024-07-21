document.addEventListener("DOMContentLoaded", function() {
    const menu = [
      { image: "image/fish_thali.jpg", alt: "fish_thali.jpg", name: "Fish Thali", desc: "A delicious meal with a fish fry, full portion rice, curry, buttermilk and vegetable mix" },
      { image: "image/fish_curry.jpg", alt: "fish_curry.jpg", name: "Fish Curry", desc: "Fish curry with authetic flavours. Variety of curries availble, noatbly Prawns, Bangde,Belanji, Naglee and many more" },
      { image: "image/prawns_fry.jpg", alt: "prawns_fry.jpg", name: "Prawns Fry", desc: "Available in rava, tawa, masala and ghee roast fry" },
      { image: "image/bangde_fry.jpg", alt: "bangde_fry.jpg", name: "Bangde Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/samdale_fry.jpg", alt: "samdale_fry.jpg", name: "Samdale Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/belanji_fry.jpg", alt: "belanji_fry.jpg", name: "Belanji Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/surmai_fry.jpg", alt: "surmai_fry.jpg", name: "Surmai Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/pomfret_masala.jpg", alt: "pomfret_masala.jpg", name: "Pomfret Masala Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/pomfret_fry.jpg", alt: "pomfret_fry.jpg", name: "Pomfret Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/doddi_fry.jpg", alt: "doddi_fry.jpg", name: "Doddi Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/naglee_fry.jpg", alt: "naglee_fry.jpg", name: "Naglee Fry", desc: "Available as rava, tawa and masala fry" },
      { image: "image/shell_fish_sukka.png", alt: "shell_fish_sukka.png", name: "Marwai Sukka", desc: "Delicious local shell fish sukka" },
      { image: "image/squid_kebab.jpg", alt: "squid_kebab.jpg", name: "Squid Kebab", desc: "Delicious kebeb styled squid dish. Also available as squid manchurian and chilli" },
      { image: "image/chicken_chilli.jpg", alt: "chicken_chilli.jpg", name: "Chicken Chilli", desc: "Delicious chicken dish. Other varieties include Chicken Manchurian, Chicken Pepper Dry, Chicken 65, Chicken Sukka, Chicken Masala, Chicken Ghee Roast" },
      { image: "image/plus.jpeg", alt: "plus.jpg", name: "And Many More", desc: "" },
    ];
  
    const carouselItemsContainer = document.getElementById('menu-list');
    menu.forEach((food, index) => {
      const isActive = index === 0 ? 'active' : '';
      const item = `
        <div class="carousel-item ${isActive}">
          <div class="card">
            <img src="${food.image}" class="card-img-top" alt="${food.alt}">
            <div class="card-body">
              <h5 class="card-title">${food.name}</h5>
              <p class="card-text">${food.desc}</p>
            </div>
          </div>
        </div>
        `;
      carouselItemsContainer.innerHTML += item;
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
    const topSeller = [
      { image: "image/prawns_ghee_roast.jpg", alt: "prawns_ghee_roast.jpg", name: "Prawns Ghee Roast" },
      { image: "image/prawns_fry.jpg", alt: "prawns_fry.jpg", name: "Prawns Fry" },
      { image: "image/pomfret_masala.jpg", alt: "pomfret_masala.jpg", name: "Pomfret Masala Fry" },
      { image: "image/surmai_masala.jpg", alt: "surmai_masala.jpg", name: "Surmai Masala Fry" },
      { image: "image/chicken_biryani.jpg", alt: "chicken_biryani.jpg", name: "Chicken Biryani" },
      { image: "image/shell_fish_sukka.png", alt: "shell_fish_sukka.png", name: "Marwai Sukka" },
      { image: "image/crab_sukka.jpg", alt: "crab_sukka.jpg", name: "Crab Sukka" },
    ];
  
    const carouselItemsContainer = document.getElementById('topsellers-list');
    topSeller.forEach((food, index) => {
      const isActive = index === 0 ? 'active' : '';
      const item = `
        <div class="carousel-item ${isActive}">
            <img src="${food.image}" class="card-img-top" alt="${food.alt}">
            <div class="carousel-caption">
                <h5>${food.name}</h5>
            </div>
        </div>
      `;
      carouselItemsContainer.innerHTML += item;
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const reviews = [
      { text: "Costal food is too good here. Had Fish meals, silver fish fry and prawns rawa fry. So fresh and so tasty. Fish meals had 2 bangda fish fries, were yummie. This restaurant is on a narrow busy road, 4 wheeler parking is not available nearby, need to go atleast half a KM away to park.", author: "Ganesh Kini", rating: 5 },
      { text: "The best restaurants in Kumta. Why? Cz they offered delicious home cooked meals at reasonable prices. We ordered the fish meals, it was good in quantity as well as quality, the fish curry was very tasty with prepared in authentic coastal style with perfect blend of spice and consistency. The Bangda Rava fry was fresh, hot, crispy and yumm.. one wanted to try more options but unfortunately we were full. But definitely the best and only place in Kumta to treat your tastebuds.", author: "Arti Patil", rating: 5 },
      { text: "This was one of the highlights ona return trip from Goa. A rather innocuous looking place which looks pretty ordinary from the outside but once you enter you realise that there is much more seating at the back. The fish meal was outstanding but what really stole the show was the prawns and the Anjal or surmai fry. Best ever prawns we have had both in terms of taste and size - these are a must have. Definitely want to revisit and cannot recommend this highly to anyone who is passing through looking for a decent fish meal. The restaurant itself is a little off the highway in Kumta town but should be a definite stopover if in the area. Finally service was excellent whether we needed extra helpings of the wonderful fish curry or vegetables. An eatery not to be forgotten and a highlight of our 2022 trip to India.", author: "Sunil Rao", rating: 5 },
      { text: "Make it a point to visit this place whenever you are around the city. One of the best sea food restaurants in kumta. Must try : Prawns ghee roast, anjal fry and fish curry rice", author: "Kiran Nayak", rating: 5 },
      { text: "Truly the most fresh Kane fry I have eaten and excellent fish curry Love the taste", author: "Chetan G.Nayak", rating: 5 },
      { text: "The best place in and around Kumta. The food was incredible and very well priced. Worth every rupee. Located within kumta market, parking is a bit of a hassle so park further away from the restaurant during the day or in the adjacent main road and walk over. There is ample seating space. The owner, Nagaraj, is a very warm person. He let me into the kitchen to look at the preparation and everything was very clean. There was no sea food smell either which made it even better. King fish masala and naked fry was great. Khane naked fry was incredible. Prawns masala fry was just perfect. The fish curry was served hot and refills were promptly provided before we even asked for it. The chicken curry was also really good. There is veg meals option too which is done equally well. 10/10 recommend going here.", author: "Rohit Bramhapuram", rating:54 },
      { text: "I recently dined at a spacious hotel in Kumta and found the overall experience to be quite satisfying. The seafood, particularly the fish, was excellent, and the vegetarian options were equally impressive, catering well to diverse tastes. However, one notable drawback is the parking situation. Located in a prime, busy area, finding convenient parking can be challenging. Despite this inconvenience, the hotel's ambiance and the quality of the food make it a worthwhile visit for anyone in the area.", author: "Adil M", rating: 5 },
      { text: "Good food can do wonders and that's exactly you get at Utsav! Food is excellent and the place is hygienic. The cherry on the cake is its pricing - which is very affordable. Must try prawn ghee roast and King fish Rava fry.", author: "Bharath Shetty", rating: 5 },
      { text: "I was told about this restaurant by another guest at the hotel I was staying at in Gokarna. This is an excellent place for authentic Mangalorean seafood which strangely enough is not that easy to find in this area. The restaurant is about an hours drive from Gokarna and is as good or better than anything you would find in Gokarna. The seafood is extremely fresh and cooked to perfection. Their fish curry is probably the best I have ever eaten. The service is prompt and attentive with excellent hospitality. The ambience is basic but the food makes up for it. We actually visited twice on consecutive days for lunch. I would highly recommend that anyone in the area should definitely visit here!", author: "Rahuul Ramachandrran", rating: 5 },
      { text: "Very Very tasty and yummy fresh Seafood. The owner is very cooperative and helpful. Value for money with quality. Parking is bit of a problem as it's situated in the main market area. Night beyond 8.30pm you get Parking in the street, when shops are closed.", author: "Padmanabha Uchil", rating: 5 },
      { text: "I recently dined at a spacious hotel in Kumta and found the overall experience to be quite satisfying. The seafood, particularly the fish, was excellent, and the vegetarian options were equally impressive, catering well to diverse tastes. However, one notable drawback is the parking situation. Located in a prime, busy area, finding convenient parking can be challenging. Despite this inconvenience, the hotel's ambiance and the quality of the food make it a worthwhile visit for anyone in the area.", author: "Adil M", rating: 5 },
    ];
  
    const carouselItemsContainer = document.getElementById('reviews-list');
    reviews.forEach((review, index) => {
      const isActive = index === 0 ? 'active' : '';
      const item = `
        <div class="carousel-item ${isActive}">
          <div class="review-card text-center">
              <p class="review-card-text">${review.text}</p>
              <p class="review-author-name">${review.author}</p>
              <p class="review-star-rating">${generateStarRating(review.rating)}</p>
          </div>
        </div>
      `;
      carouselItemsContainer.innerHTML += item;
    });
  
    function generateStarRating(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '&#9733;'; // Full star
        } else {
          stars += '&#9734;'; // Empty star
        }
      }
      return stars;
    }
  });
