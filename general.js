/*const changeTheme = (theme) => {
    document.body.classList = '';
    document.body.classList.add(theme);
}*/

const setTheme = theme => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  };
  
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    document.documentElement.className = savedTheme;
  }





