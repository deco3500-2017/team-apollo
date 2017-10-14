class Venue {
  constructor(venueObject) {
    this.id = venueObject.venueID;
    this.name = venueObject.venueName;
    this.description = venueObject.description;
    this.fb = venueObject.venueFB;
    this.site = venueObject.venueSite;
    this.reviews = new Array();
    this.audio = null;
    this.accelerometer = null;
    this.popularity = null;
    this.buzz = null;
  }

  updatebuzz(audio, accelerometer, popularity, buzz) {
    this.audio = audio;
    this.accelerometer = accelerometer;
    this.popularity = popularity;
    this.buzz = buzz;
  }

  newReview(review) {
    this.reviews[review.id] = review.review;
  }

  clearReview(review) {
    delete this.reviews.review.id;
  }
}

var venues = new Array();
