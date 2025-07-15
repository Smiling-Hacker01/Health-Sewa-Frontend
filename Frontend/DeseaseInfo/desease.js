function searchDisease() {
    const query = document.getElementById("search-box").value.toLowerCase().trim();
    const diseaseDivs = document.querySelectorAll(".disease");

    // yhn pe hr ek se highlight class hata di hai
    diseaseDivs.forEach(div => div.classList.remove("highlight"));

    if (query) {
        const diseaseElement = document.getElementById(query);
        if (diseaseElement) {
            diseaseElement.classList.add("highlight"); // Highlight krne ke liye dusri class laga di hai..
            diseaseElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else if(!diseaseElement){
          const commonDesease = document.querySelector('#forAllDesease');
          const deseaseName = document.querySelector('.user-input');
          deseaseName.innerText = query;
          commonDesease.classList.remove('common-desease');
          commonDesease.classList.add("highlight"); 
          commonDesease.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}

