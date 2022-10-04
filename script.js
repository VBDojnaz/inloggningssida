const username = "sara";
const password = "qwe123";
const app = document.getElementById("app");

function isLoggedin() {
  return localStorage.getItem("loggedin") ? true : false;
}
function getUsername() {
  return localStorage.getItem("loggedin");
}
function login() {
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  if (
    usernameField &&
    usernameField.value.toLowerCase() == username &&
    passwordField &&
    passwordField.value == password
  ) {
    localStorage.setItem("loggedin", usernameField.value);
    return render({ success: "Välkommen, du är nu inloggad" });
  }
  render({ error: "Ogiltliga inloggningsuppgifter" });
}
function logout() {
  localStorage.removeItem("loggedin");
  render({ info: "Du har nu blivit utloggad!" });
}

function render(data = {}) {
  const { error, info, success } = data;
  app.innerHTML = `
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item">
      Atlantis Simsällskap
    </a>
  </div>
</nav>
<section class="section">
  <div class="container">
    <div class="card p-6 my-6">
      <h1 class="title">Välkommen till Atlantis Simsällskap</h1>
      <p class="subtitle">Här kan du hitta information om oss, samt hantera till medlemskap</p>
    </div>
    
    ${
      success
        ? `
      <div class="card p-6 my-6 has-background-success-light">
        <p class="has-text-success">${success}</p>
      </div>
    `
        : ""
    }
    ${
      info
        ? `
      <div class="card p-6 my-6 has-background-info-light">
        <p class="has-text-info">${info}</p>
      </div>
    `
        : ""
    }
    ${
      error
        ? `
      <div class="card p-6 my-6 has-background-danger-light">
        <p class="has-text-danger">${error}</p>
      </div>
    `
        : ""
    }

    ${
      isLoggedin()
        ? `
      <div class="card p-6 my-6">
        <h1 class="title">Hej ${getUsername()}!</h1>
        <p class="subtitle">Här kan du se ditt medlemskap</p>
        <button class="button is-danger" onclick="logout()">Logga ut</button>
      </div>
    `
        : `
      <div class="card p-6 my-6">
        <h1 class="title">Logga in</h1>
        <p class="subtitle">Hantera ditt medlemskap här</p>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input" id="username" placeholder="Användarnamn">
            <span class="icon is-small is-left">
              <i class="fa-solid fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" id="password" placeholder="Lösenord">
            <span class="icon is-small is-left">
              <i class="fa-solid fa-key"></i>
            </span>
          </p>
        </div>
        <button class="button is-primary" onclick="login()">Logga in</button>
      </div>
    `
    }
    <div class="card p-6 my-6">
      <h1 class="title">Föreningens regler</h1>
      <p class="subtitle">Här är våra regler</p>
      <p class="my-4">Löksås ipsum regn precis brunsås om tid trevnadens fram brunsås hans, se sällan dunge sin kunde trevnadens genom kom gör, erfarenheter dunge trevnadens redan strand hav där hwila händer. Själv det ta i vi av trevnadens denna ordningens, stora om olika faktor erfarenheter från fram, åker dimmhöljd räv färdväg och häst dimma. Häst ta ska rot bland har vid på vi regn, det annan gör och ännu tre hwila.</p>

      <p class="my-4">Omfångsrik tiden verkligen strand när se söka precis vid sjö söka ordningens, inom vid ännu bland redan miljoner helt som enligt färdväg, så sista plats där från träutensilierna sällan strand vi vidsträckt. Ingalunda söka olika samma tiden ordningens och vi olika träutensilierna se, plats för träutensilierna verkligen i blivit rot dag därmed erfarenheter häst, och miljoner enligt är sin rännil det genom varit.</p>
      
      <p class="my-4">Vemod nya och gör sista hela brunsås som äng denna kom, lax verkligen ordningens från olika kan sig sorgliga denna, verkligen vemod bland vemod flera del det söka som. Björnbär mot bra redan annat regn sin nu groda som har, helt brunsås varit groda inom flera år gör färdväg inom gör, dimmhöljd strand smultron sax hav groda del ta hwila.</p>
    </div>
  </div>
</section>
`;
}

render();
