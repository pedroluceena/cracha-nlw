const LinksSocialMedia = {
github: "pedroluceena",
youtube: "UC51TNDe_bMTNpcWcESV3L_A",
facebook: "pedro.lucena.543",
instagram: "pelucenap",
twitter: "pelucenap"
}
      
function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')         
          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}
      
function getGitHubProfileInfos (){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio 
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos ()