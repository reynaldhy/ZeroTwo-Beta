auth.onAuthStateChanged((user) => {
  
  const currentPage = window.location.pathname;
  
  if (!user) {
    if (!currentPage.includes("index.html")) {
      window.location.replace("index.html");
    }
    return;
  }
  
  if (user) {
    if (currentPage.includes("index.html")) {
      window.location.replace("dashboard.html");
    }
  }
  
});
