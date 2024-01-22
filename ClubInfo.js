
export function GenerateInformation(dt){
    sessionStorage.setItem('myData', JSON.stringify(dt));
}


  document.addEventListener('DOMContentLoaded', () => {
    const storedData = sessionStorage.getItem('myData');
    const data = JSON.parse(storedData);

    const clubInfoContainer = document.getElementById('clubInfo');
  
    const adresa = data.adresa;
    const desc = data.desc;
    const imageSrc = data.image;
    const name = "Vanilla Club";
  
    const htmlContent = `
      <h2>${name}</h2>
      <img src="${imageSrc}" alt="${name}">
      <p><strong>Address:</strong> ${adresa}</p>
      <p><strong>Description:</strong> ${desc}</p>
    `;
    
    clubInfoContainer.innerHTML += htmlContent;

    document.getElementById("goBackButton").addEventListener("click", () => {
        window.location.href = './findclubs.html';
        GenerateInformation(data);
      });
  });
  