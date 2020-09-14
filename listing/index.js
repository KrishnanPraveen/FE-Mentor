// Jobs must be declared with const keyword bcoz it's not going to change

const jobs = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];

let jobList = document.querySelector('.job_listing_container'); // It will have jobs lists
let filterDisplay = document.querySelector('.filter_sec '); // Filter container
let tagsDisplay = document.querySelector('.tags'); //Filter tag container
let filterText; //It will have tag element
let existingFilterArray = []; //Show selected filter
let resetBtn = filterDisplay.querySelector('.clear a'); //Clear all tags

//New, Feature Label Checking
function newFeature(jobNew, jobFeature){
  if(jobNew === true && jobFeature == true){
    return `
      <div class="features_new">
        <h5 class="new">NEW!</h5>
        <h5 class="feature">FEATURED</h5>
      </div>
    `
  }
  else if(jobNew === true ){
    return `
      <div class="features_new">
        <h5 class="new">NEW!</h5>
      </div>
    `
  }
  else if(jobFeature === true){
    return `
      <div class="features_new">
        <h5 class="feature">FEATURED</h5>
      </div>
    `
  }
  else{
    return ``;
  }
}

//Languages checking
function languages(lang){
  return `
    ${lang.map(function(items){
      return `<button class="desigination"  data-info="${items}">${items}</button>`
    }).join('')}
  `
}

//Tools checking
function tools(tool){
  return `
    ${tool.map(function(items){
      return `<button class="desigination"  data-info="${items}">${items}</button>`
    }).join('')}
  `
}

//Displaying Jobs as list
function displayItems(object = jobs) {
  const html = object.map(job =>
  `
    <div class="list_card ${job.featured ? `feature-border` : ``}">
      <div class="company_img">
        <img src="${job.logo}" alt="account">
      </div>
      <div class="job_info">
        <div class="company_features">
          <div class="company_name">
            <h2>${job.company}</h2>
          </div>
          ${newFeature(job.new, job.featured)}
        </div>
        <div class="job_title">
          <h1>${job.position}</h1>
        </div>
        <div class="job_pot_details">
          <ul>
            <li>${job.postedAt}</li>
            <li>${job.contract}</li>
            <li>${job.location}</li>
          </ul>
        </div>
      </div>
      <div class="job_desigination">
        <button class="desigination" data-info="${job.role}">${job.role}</button>
        <button class="desigination" data-info="${job.level}">${job.level}</button>
        ${job.languages ? languages(job.languages) : ''}
        ${job.tools ? tools(job.tools) : ''}
      </div>
    </div>
  `).join('');
  jobList.innerHTML = html;
}

displayItems(jobs);

jobList.addEventListener('click', function(e){
  const filter = e.target.getAttribute('data-info');
  console.log(filter);
  if (e.target.matches('.job_listing_container button')) {
    if(!existingFilterArray.includes(filter)){
      addToFilter(filter);
    }
    else {
      removeItemFromFilter(filter);
    }
  }
});

function addToFilter(filter) {
  existingFilterArray.push(filter);
  if(filterDisplay.classList.contains('hidden')) {
    filterDisplay.classList.remove('hidden');
  }
  console.log(existingFilterArray.length);
  if(existingFilterArray.length) {
    existingFilterArray.forEach(function(langOrTool) {
      filterText = document.createElement("div");
      filterText.classList.add('filterTag');
      filterText.classList.add(langOrTool);
      filterText.innerHTML = 
      `<p>${langOrTool}</p><button><img src="./images/icon-remove.svg"></button>`;
    });
    tagsDisplay.appendChild(filterText);
  } 
  updateDisplay();
}

function updateDisplay() {
  // Update the filter object
  let filtered = jobs.filter(function(job, index, jobs) {
    return isTrue(existingFilterArray, jobs[index].languages, jobs[index].tools, jobs[index].role, jobs[index].level);
  });
  // Display filter object
  displayItems(filtered);
}

// check if all objects in filterArray are in the languages or tools array from the jobs object
function isTrue(testArr, objArrLang, objArrTool, objRole, objLevel){
  return testArr.every(i => objArrLang.includes(i) || objArrTool.includes(i) || objRole.includes(i) || objLevel.includes(i));
}

function removeItemFromFilter(filterEl) {
  let indexToRemove = existingFilterArray.indexOf(filterEl);
  console.log(indexToRemove);
  let childToRemove = tagsDisplay.querySelector(`.${filterEl}`);
  // Remove it from the filterArray
  existingFilterArray.splice(indexToRemove, 1);
  // Remove from filterDisplay
  tagsDisplay.removeChild(childToRemove);
  if(existingFilterArray.length === 0) {
    filterDisplay.classList.add('hidden');
  }
  updateDisplay();
}

function findFilterItem(e) {
  // let childToRemove = filterDisplay.querySelector(`.${filterEl}`);
  // Find the index of that element in the filterArray
  if (e.target.matches('.filter_sec button') || e.target.matches('.filter_sec button img') ) {
    // Get the name of the element that is being removed
    let filterEl = e.target.closest('.filterTag').firstElementChild.innerText;
    removeItemFromFilter(filterEl);
  }
}

function resetDisplay() {
  //select all children
  let filterTags = tagsDisplay.querySelectorAll('.filterTag');
  console.log(filterTags);
  //remove
  filterTags.forEach((tag) => {
    tagsDisplay.removeChild(tag);
  });
  //reset array
  existingFilterArray = [];
  if(existingFilterArray.length === 0) {
    filterDisplay.classList.add('hidden');
  }
  displayItems(jobs);
}

// listen on filter display for click on removal button
tagsDisplay.addEventListener('click', findFilterItem);
resetBtn.addEventListener('click', resetDisplay);