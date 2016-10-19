console.log('wired up!')


var fetchGitHubProfile = function(inputState){
   $.getJSON("https://api.github.com/users/" + inputState + "?"+ MyApiSecret).then( function(returnData){
      console.log(returnData)



      var myProfileStr =   '<img class = "avatar-img" src="' + returnData.avatar_url + '"/>'
      myProfileStr +=      "<h3>" + returnData.name + "</h3>"
      myProfileStr +=      "<h3>" + returnData.login + "</h3>"
      myProfileStr +=      "<p>" + returnData.bio + "</p>"
      myProfileStr +=      '<div class ="btn-primary text-center ">Edit Profile</div>'
      myProfileStr +=      '<hr>'
      myProfileStr +=      "<h4>" + returnData.company + "</h4>"
      myProfileStr +=      "<h4>" + returnData.blog + "</h4>"
      myProfileStr +=      "<h4>" + returnData.location + "</h4>"
      myProfileStr +=      "<h4>" + returnData.email + "</h4>"
      myProfileStr +=      "<h4>" + returnData.html_url +"</h4>"
      myProfileStr +=   '</div>'
      myProfileStr += '</div>'

      userProfile.innerHTML = myProfileStr
   })
}

var fetchGitHubProfRepo = function(inputState){
   $.getJSON("https://api.github.com/users/" + inputState + "/repos?" + MyApiSecret).then(function(returnData){
       console.log(returnData)

     var myRepoStr = '<ul class="repo-container repoList">'+ myRepoStr
      for(var key in returnData){
         myRepoStr += '<li>' + '<hr>' + '</li>'
         myRepoStr += '<li>' + '<a href="returnData[key].url">' + returnData[key].name +'</a>'+'</li>'
         myRepoStr += '<li>' + returnData[key].created_at +'</li>'
         myRepoStr += '</ul>'
      }
      repoProfile.innerHTML = myRepoStr
   })
}
var fetchGitHubLang = function(inputState){
   $.getJSON("https://api.github.com/users/" + inputState + "/repos?" + MyApiSecret).then(function(returnData){
       console.log(returnData)
      var myLangStr = '<ul class = "language-container langList">'+ myLangStr
       for(var key in returnData){
          myLangStr +="<li>" + "<br>"+"<br>" + "</li>"
          myLangStr +='<li>' + returnData[key].language +'</li>'
          myLangStr +='<li>' + "<br>" + "</li>"
         //  myLangStr +="<li>" + "<hr>" + "</li>"
          myLangStr +='</ul>'
   }
      langProfile.innerHTML = myLangStr
   })
}
var fetchGitHubWatch = function(inputState){
   $.getJSON("https://api.github.com/users/" + inputState + "/repos?" + MyApiSecret).then(function(returnData){
       console.log(returnData)
      var myWatchStr = '<ul class = "watch-container watchList">'+ myWatchStr
       for(var key in returnData){
          myWatchStr +="<li>" + "<br>"+"<br>" + "</li>"
          myWatchStr +='<li>' +'<i class="fa fa-heart" aria-hidden="true"></i>'+" "+ returnData[key].watchers +'</li>'
          myWatchStr +='<li>' + "<br>" + "</li>"
         //  myLangStr +="<li>" + "<hr>" + "</li>"
          myWatchStr +='</ul>'
   }
      watchProfile.innerHTML = myWatchStr
   })
}
var fetchGitHubStar = function(inputState){
   $.getJSON("https://api.github.com/users/" + inputState + "/repos?" + MyApiSecret).then(function(returnData){
       console.log(returnData)
      var myStarStr = '<ul class = "star-container starList">'+ myStarStr
       for(var key in returnData){
          myStarStr +="<li>" + "<br>"+"<br>" + "</li>"
          myStarStr +='<li>' + '<i class="fa fa-star" aria-hidden="true"></i>'+" "+returnData[key].stargazers_count +'</li>'
          myStarStr +='<li>' + "<br>" + "</li>"
         //  myStarStr +="<li>" + "<hr>" +"</li>"

          myStarStr +='</ul>'
   }
      starProfile.innerHTML = myStarStr
   })
}

var repoSelect = function(evt){
var repoState = document.querySelect('.repo-value')

   if(evt.KeyCode === 13){
         repoValue = repoSelect.value;
   }
      console.log(reposelect.value)
}

var profileSelect = function(evt){
var inputState = document.querySelector('.input-value')

   if(evt.keyCode === 13){
      window.location.hash = inputState.value;
   }
      console.log(inputState.value)
}

var inputRouter = function(){
   var currentInput = window.location.hash.slice(1)


   if (currentInput.length === 0){
      fetchGitHubProfile("Dolpator")
      fetchGitHubProfRepo("Dolpator")
      fetchGitHubLang("Dolpator")
      fetchGitHubStar("Dolpator")
      fetchGitHubWatch("Dolpator")
      return;

   }
      fetchGitHubProfile(currentInput)
      fetchGitHubProfRepo(currentInput)
      fetchGitHubLang(currentInput)
      fetchGitHubStar(currentInput)
      fetchGitHubWatch(currentInput)
}


if( typeof myApiSecret === 'undefined' ){
   var myApiSecret = ''
}
var appProfile = document.querySelector('#app-container')
var userProfile = document.querySelector('.user-container')
var repoProfile = document.querySelector('.repo-container')
var starProfile = document.querySelector('.star-container')
var langProfile = document.querySelector('.language-container')
var watchProfile = document.querySelector('.watch-container')
inputRouter()
window.addEventListener('hashchange',inputRouter )
window.addEventListener('keydown', profileSelect)
//window.addEventListener('keydown',repoSelect)
