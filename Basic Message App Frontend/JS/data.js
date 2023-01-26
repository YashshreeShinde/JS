

export const messages = {
  Yashshree: {
    reciever: {
      Amit: {recievedmessages: ["Hi", "How are you"]},
      Priyanka: { recievedmessages: ["kwd"]},
    }
  },
  Amit: {
    reciever: {Yashshree: {recievedmessages: ["Hi", "I am fine"]},
      Priyanka: {recievedmessages: ["Hi"]},
    }
  }


};

const data={
  message:{
    from:"abc",
    to:"kbc",
          messages:{
            id:1,
            message:"hi",
            reply:""
          }
    },
    message:{
      from:"kbc",
      to:"abc",
      messages:{
        id:1,
        message:"hi",
        reply:""
      }
    }

}

