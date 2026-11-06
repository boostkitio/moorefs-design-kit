// Public Google reviews from Adam's Business Profile, shown verbatim.
// The first review is featured in large type on the site.

export type GoogleReview = {
  id: string;
  name: string;
  date: string; // ISO date the review was posted (not shown on the site)
  text: string;
  url: string;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "anna-p",
    name: "Anna P.",
    date: "2026-09-08",
    text: "I highly recommend Adam he was great and so helpful in getting my mortgage! He was always flexible when arranging to speak. As a first time buyer I was clueless with the whole process but Adam was patient with me and explained the process and how things work.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xoUVduUjJRMXBoVUZOWmFIZzBaMDFsVGsxRFpsRRAB!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CAIQACodChtycF9oOlhQWnR2Q1phUFNZaHg0Z01lTk1DZlE%7C%7C?hl=en-GB",
  },
  {
    id: "phil-g",
    name: "Phil G.",
    date: "2026-10-17",
    text: "Adam was absolutely brilliant, really helpful and he made our experience of getting a mortgage to move house stress free!!!! Can’t recommend enough, thanks so much 🙏",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25vMmFtNVhOVGxYV25nMFFuUm1kRk5wZURNMlJrRRAB!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CAIQACodChtycF9oOno2am5XNTlXWng0QnRmdFNpeDM2RkE%7C%7C?hl=en-GB",
  },
  {
    id: "catherine-m",
    name: "Catherine M.",
    date: "2020-02-21",
    text: "Moore Financial Solutions were amazing to work with, Adam and Diane were so helpful with everything and helped make our home move and getting our new mortgage so much less stressful.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURzc1BlSEpREAE!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CIHM0ogKEICAgIDssPeHJQ%7C%7C?hl=en-GB",
  },
  {
    id: "michael-g",
    name: "Michael G.",
    date: "2022-01-09",
    text: "My partner and I recently completed on our property purchase after a very  long and stressful buying process. I can honestly say that if it weren't for Adam and the team we would have struggled to get through it. From the very start of the process, Moore Financial went above and beyond the call of duty for us, not only finding us a great mortgage deal (more than once), but also providing support and assistance at every step of the purchase. They are friendly, professional and will do anything they can to help their clients. We absolutely recommend this company to anyone as they are Fantastic!!! Thank you Adam, Diane and the team.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNtcThDMWhnRRAB!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CIHM0ogKEICAgICmq8C1hgE%7C%7C?hl=en-GB",
  },
  {
    id: "dominic-a",
    name: "Dominic A.",
    date: "2020-06-18",
    text: "I recently used Adam as a first time buyer after a friends recommendation. Adam was excellent, chasing and helping to resolve all sorts of solicitors and agents mistakes that were really not his responsibility. Finally getting over the line during lockdown was a pain but I wouldn’t hesitate to recommend Adam and his team if you need a mortgage.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURjcTZPVnV3RRAB!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CIHM0ogKEICAgIDcq6OVuwE%7C%7C?hl=en-GB",
  },
  {
    id: "timmy-g",
    name: "Timmy G.",
    date: "2020-10-05",
    text: "Adam Moore was recommended to us and we couldn’t have been more happy with the excellent service we received from him. Throughout the mortgage application process, Adam provided us with sound advice & support, he is extremely knowledgable, efficient & professional. He maintained communication with us throughout, he was super efficient in his correspondences & nothing was too much trouble. We would highly recommend his services.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURDMWJma2VnEAE!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CIHM0ogKEICAgIDC1bfkeg%7C%7C?hl=en-GB",
  },
  {
    id: "andy-c",
    name: "Andy C.",
    date: "2020-07-22",
    text: "Knowledgeable, professional and brim full of customer focused altruism; I highly recommended Adam and the MooreFS team. As a long term customer, the quality of the service keeps me coming back.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQ4eGJ1LW93RRAB!2m1!1s0x0:0x8e8ffee35f9a4466!3m1!1s2@1:CIHM0ogKEICAgID8xbu-owE%7C%7C?hl=en-GB",
  },
];
