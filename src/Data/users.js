import user from '../reducers/user';

export const data = {
  profile: {
    id: 1,
    name: "Pushkar Narkhede",
    image: user.image,

    contacts: [
      {
          id: 2,
          name: "Priya Sharma",
          image: "https://source.unsplash.com/201x201/?woman",
          chatlog: [
              {
                  text: "Hello Pushkar! How are you?",
                  timestamp: "12:36 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "I am fine Priya. What about you?",
                  timestamp: "12:37 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "I am great, Pushkar.",
                  timestamp: "1:00 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Let's meet",
                  timestamp: "01:01 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "Okay, sure!",
                  timestamp: "01:05 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 3,
          name: "Vikram Singh",
          image: "https://source.unsplash.com/202x202/?man",
          chatlog: [
              {
                  text: "Hi Pushkar!",
                  timestamp: "3:00 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "I am fine Vikram, What's about you?",
                  timestamp: "3:02 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "I am great, dear.",
                  timestamp: "3:03 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Let me check something and call you. Give me some time",
                  timestamp: "3:30 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "Where are you?",
                  timestamp: "4:00 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 4,
          name: "Ananya Gupta",
          image: "https://source.unsplash.com/203x203/?woman",
          chatlog: [
              {
                  text: "Hi Pushkar!",
                  timestamp: "4:30 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "I am fine Ananya. What about you?",
                  timestamp: "04:32 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "I am great, Pushkar.",
                  timestamp: "04:40 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Are you busy?",
                  timestamp: "04:45 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "No",
                  timestamp: "04:50 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 5,
          name: "Amit Patel",
          image: "https://source.unsplash.com/204x204/?man",
          chatlog: [
              {
                  text: "Hey Pushkar, where is your friend, Simens?",
                  timestamp: "05:00 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "I don't know bro!",
                  timestamp: "05:01 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "Are you sure, Pushkar?",
                  timestamp: "05:05 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Yes bro, I am damn sure",
                  timestamp: "05:07 PM",
                  sender: "me",
                  message_id: 4,
              },
              {
                  text: "All right Amit",
                  timestamp: "05:09 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 6,
          name: "Esha Kapoor",
          image: "https://source.unsplash.com/205x205/?woman",
          chatlog: [
              {
                  text: "Where are you bro?",
                  timestamp: "7:00 PM",
                  sender: "me",
                  message_id: 1,
              },
              {
                  text: "I'm in Market now",
                  timestamp: "07:07 PM",
                  sender: "user",
                  message_id: 2,
              },
              {
                  text: "Call me ASAP",
                  timestamp: "07:07 PM",
                  sender: "me",
                  message_id: 3,
              },
              {
                  text: "Okay",
                  timestamp: "07:09 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "Is everything fine?",
                  timestamp: "07:10 PM",
                  sender: "me",
                  message_id: 5,
              },
              {
                  text: "Yeah!",
                  timestamp: "07:12 PM",
                  sender: "user",
                  message_id: 6,
              },
          ]
      },
      {
          id: 7,
          name: "Sneha Choudhary",
          image: "https://source.unsplash.com/209x209/?woman",
          chatlog: [
              {
                  text: "Hi Pushkar!",
                  timestamp: "8:00 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "Hello Sneha! How are you?",
                  timestamp: "8:02 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "I am doing well, thanks for asking.",
                  timestamp: "8:05 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Any plans for the weekend?",
                  timestamp: "8:10 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "Not yet, but I'm thinking of watching a movie.",
                  timestamp: "8:15 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 8,
          name: "Arun Khanna",
          image: "https://source.unsplash.com/210x210/?man",
          chatlog: [
              {
                  text: "Hey Pushkar!",
                  timestamp: "9:00 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "Hi Arun! What's up?",
                  timestamp: "9:02 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "Nothing much, just relaxing after work.",
                  timestamp: "9:05 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Do you have any weekend plans?",
                  timestamp: "9:10 PM",
                  sender: "user",
                  message_id: 4,
              },
              {
                  text: "I might go for a hike. How about you?",
                  timestamp: "9:15 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 9,
          name: "Neha Gupta",
          image: "https://source.unsplash.com/211x211/?woman",
          chatlog: [
              {
                  text: "Hi Pushkar!",
                  timestamp: "10:00 PM",
                  sender: "user",
                  message_id: 1,
              },
              {
                  text: "Hello Neha! How's your day going?",
                  timestamp: "10:02 PM",
                  sender: "me",
                  message_id: 2,
              },
              {
                  text: "It's been good, thanks. How about yours?",
                  timestamp: "10:05 PM",
                  sender: "user",
                  message_id: 3,
              },
              {
                  text: "Just busy with work. Looking forward to the weekend.",
                  timestamp: "10:10 PM",
                  sender: "me",
                  message_id: 4,
              },
              {
                  text: "Any weekend plans?",
                  timestamp: "10:15 PM",
                  sender: "me",
                  message_id: 5,
              },
          ]
      },
      {
          id: 10,
          name: "Rahul Verma",
          image: "https://source.unsplash.com/206x206/?man",
          chatlog: []
      },
      {
          id: 11,
          name: "Meera Joshi",
          image: "https://source.unsplash.com/207x207/?woman",
          chatlog: []
      },
      {
          id: 12,
          name: "Rajiv Kapoor",
          image: "https://source.unsplash.com/208x208/?man",
          chatlog: []
      },
  ]
  },
};