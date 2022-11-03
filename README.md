# Atelier
Atelier is a responsive and interactive e-commerce clothing website.
This website is divided into 4 categories.

[![Demo]](https://user-images.githubusercontent.com/57865436/199666313-ef292c70-bb0d-461a-a618-a6a3c224423f.mp4)

- Product Overview
- Related Items & Comparison
- Questions & Answers
- Ratings & Reviews

## Description
### Questions & Answers
This section includes a list of questions and answers for the currently rendered product.
A user can also submit a question or an answer for the current product.

## Installation
1. Clone the repo into your computer <br>
```sh
$ git clone https://github.com/rpp2205-fec-session/rpp2205-session-atelier.git
```

2. Install NPM packages <br>
```sh
$ npm install
```

3. Change the configuration <br>
* Change the name of the following files <br>
  config_rr.example.js => config_rr.js <br>
  config.example.js => config.js

* Create your Cloudinary account (https://cloudinary.com/)
* Get your "Cloud Name" and "Preset" from your dashboard
* Add your own parameters on each file

config_rr.js
```html
module.exports = {
  // Add your "preset"
  cloudinary_preset: ""
}
```

config.js
```html
module.exports = {
  CLOUD_NAME: "", // Add your "cloud name"
  CLOUD_PRESET: "" // Add your "preset"
}
```

4. Start our App <br>
```sh
$ npm run build
```

## Team Members
Sijia Tao - Product Overview
Stacey Pereira - Related Items & Comparison
Yui Murayama - Questions & Answers
Brandon Bissing - Ratings & Reviews
