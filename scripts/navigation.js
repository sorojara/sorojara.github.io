function goToMain() {
    let path = document.referrer 
    if (path.endsWith('/')){
        window.location.assign("/")
    }
    else
    {
        window.location.replace("/")
    }
    //window.location.assign("/");
  }