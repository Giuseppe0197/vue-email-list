/* Attraverso l’apposita API di Boolean generare 10 indirizzi email */

/* clleghiamo il container di html in vue */

var containerMail = new Vue (

    {

        el: "#container",

        data: {

            /* creiamo un data con valore vuoto per la mail */

            mailGenerated: "",

            /* creiamo una array vuota che verrà riempita da un ciclo con axios */

            mailList: []

        },

        mounted() {

            /* creiamo una variabile self per prendere il this della mail e dell'array */

            const self = this;

            /* creiamo un ciclo per generare le mail e pushamo il tutto nell'array */

            for(let i = 0; i < 10; i++){

                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(mailRandom){

                    self.mailGenerated = mailRandom.data.response;

                    self.mailList.push(self.mailGenerated);

                });

            }

            console.log(self.mailList);

        },

    }

)