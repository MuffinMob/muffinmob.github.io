import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase, ref, set, child, update, remove, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

$(document).ready(function () {
    // var firebaseApiKey = new URLSearchParams(window.location.search).get('key');
    // //store firebase api key
    // if (!localStorage.getItem('firebaseApiKey')) {
    //     localStorage.setItem('firebaseApiKey', firebaseApiKey);
    // }

    //FIREBASE INITIALIZATION
    const firebaseConfig = {
        apiKey: "AIzaSyARwphqFXalQsio41sNquaWcjE3CaO0p4M", //localStorage.getItem('firebaseApiKey'),
        authDomain: "muffinmob-1ab18.firebaseapp.com",
        databaseURL: "https://muffinmob-1ab18-default-rtdb.firebaseio.com/",
        projectId: "muffinmob-1ab18",
        storageBucket: "muffinmob-1ab18.appspot.com",
        messagingSenderId: "993244819723",
        appId: "1:993244819723:web:da51498c266441a9b5b20e",
        measurementId: "G-D93PTF5P98"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const db = getDatabase();
    const dbRef = ref(getDatabase());
    //END FIREBASE INITIALIZATION 

    get(child(dbRef, 'blogs')).then((snapshot) => {
        if (snapshot.exists()) {
            var list = snapshot.val();
            var listLength = (Object.keys(list).length);

            for (let i = (listLength - 1); i > -1; i--) {
                var object = Object.values(list)[i];
                var author = Object.values(object)[0];
                var content = Object.values(object)[1];
                var date = Object.values(object)[2];
                var title = Object.values(object)[3];


                $('<div>', {
                    id: 'blog-' + i,
                    class: 'blogcontainer',
                }).appendTo('.pagewrapper');

                var twitterbtn = document.createElement('a');
                twitterbtn.href = ('https://twitter.com/intent/tweet?text=Check%20out%20this%20post!%0Ahttps://muffinmob.github.io/index.html%23blog-' + i);
                twitterbtn.className = 'tweet';
                twitterbtn.innerHTML = 'Tweet';
                document.getElementById('blog-' + i).append(twitterbtn);

                $('<h1>', {
                    class: 'blogtitle',
                }).appendTo('#blog-' + i);

                $('<div>', {
                    class: 'blogmeta',
                    display: 'flex'
                }).appendTo('#blog-' + i);

                $('<div>', {
                    class: 'blogcontent',
                }).appendTo('#blog-' + i);

                $('#blog-' + i + ' .blogtitle').html(title);
                $('#blog-' + i + ' .blogmeta').html("By " + author + " | " + date);
                $('#blog-' + i + ' .blogcontent').html(content);

                if (i > 0) {
                    $('<div>', {
                        class: 'border'
                    }).appendTo('.pagewrapper');
                }
            }

        } else {
            //no blogs were found.
            console.log("no blogs were found!");
        }
    }).catch((error) => {
        console.error(error);
    });

    // const getUrlParameter = (sParam) => {
    //     let sPageURL = window.location.search.substring(1),
    //         sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
    //         sParameterName,
    //         i;
    //     let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
    //     sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
    //     for (i = 0; i < sURLVariables.length; i++) {
    //         sParameterName = sURLVariables[i].split('=');
    //         if (sParameterName[0] === sParam) {
    //             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    //         }
    //     }
    // };

    //set(ref(db, 'accessKey'), accessToken);

}); // End of document.ready

