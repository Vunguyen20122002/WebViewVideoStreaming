function displayOnChange() {

    // Lấy các phần tử HTML
    const displayHome = document.querySelector('#home');
    const displayAbout = document.querySelector('#about');
    const displayIntroduce = document.querySelector('#introduce');
    const displayInstruct = document.querySelector('#instruct');
  
    // Hiển thị phần tử tương ứng với sự kiện thay đổi
    switch (true) {
      case "home":
        displayHome.style.display = "block";
        break;
      case "about":
        displayAbout.style.display = "block";
        break;
      case "introduce":
        displayIntroduce.style.display = "block";
        break;
      case "instruct":
        displayInstruct.style.display = "block";
        break;
    }
  }