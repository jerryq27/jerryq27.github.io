---
# the default layout is 'page'
icon: fas fa-circle-user
order: 6
---

# Gerardo (Jerry) Quintero

## Education

**University of Nebraska at Kearney** 

: _Computer Science, Japanese (2013 - 2019)_

**Saitama University**

: _Japanese (2017 - 2018)_

## Work Experience

**JerryQ LLC**
: _Owner, Full Stack Engineer (2022 - Present)_

Worked on projects for a variety of clients:

1. [Cash-Wa](https://web.cashwa.com/)
  - Worked remotely with a team of contractors to redesign their customer portal
  - Used Atlassian tools such as Jira, Confluence, and Bitbucket for managing the project
  - Tech stack involved MySQL, WordPress+Roots, and Vue3
1. [NR Connections](https://nrconnections.com/)
  - Designed WordPress plugins to meet the needs of the business and handle their subscription models
  - Setup Cloudflare to manage DNS records, block unwanted requests, and human verification for forms
  - Tech stack involved is MySQL, WordPress, and Vue3

Other tools used: Git, Docker, SSH, Bash  

**Omaha National Group**
: _Application Coordinator (2020 - 2022)_

- Jack of all trades type of roll which involves working on a variety of software projects:
  - Tools used by sales, underwriters, or C-level executives
  - CMS tools for the intranet maintainers
  - Work with IT and the software team to tickets that could be handed off to us
- Gained remote work experience during the pandemic
- Advance use of tools such as Salesforce, Microsoft Excel, Microsoft Access, and PowerBI

Other tools used: VBA, Java, Vue, Python 

**Black Brick Software**

Worked on projects for a variety of clients:

1. [Agri Affiliates](https://agriaffiliates.com/)
  - Designed a web application to replace their Microsoft Access application
  - Created a new database schema in MySQL based on their Microsoft Access data
  - Exported data from a Microsoft Access project using bash
  - Used Laravel and React to create a web application that mirrors the UI they were used to with Access forms
  - Integrated Google Cloud Storage to store attachments tied to the Access application such as PDFs

1. [Simple Laundry Technology](https://simplelaundrytechnology.com/)
  - Created an Android application to track customer laundry being picked up by company trucks
  - Used a Groker RFID scanner to scan tags sewn into clothes
  - Used Groker's API get the RFID Scanner working with Android
  - Designed a SQLite database to store scan information from laundry tags and data from company servers
  - Created two versions of the Android app to target different customers using Gradle flavors
  - Worked with the client's developer to ensure that data sent to their software is processed and formatted correctly

Other tools used: Git, Kotlin, Python

**Phynd Technologies, Inc**
: _Software Developer, QA (2014 - 2017)_

1. Development Work
  - Developed server-side Python tools for data management
  - Developed and maintained a core Python application which scraped websites and downloaded files for the company
  - The application also included a built-in notifications and logging system
1. QA Work
  - Automated test cases using Selenium
  - Helped maintain techincal documentation
  - Inspected data before being processed by internal software

Other tools used: MSSQL, JavaScript

**University of Nebraska at Kearney - Learning Commons**
: _Computer Science Tutor (2014 - 2017)_

- Reviewed course materials and completed the assignments to better help students who visited
- Studied techniques to be a more effective tutor and received a Master Level 3 certification
- Learned to read other people's code, understand it, and spot potential errors
- Translated complicated technical concepts into an understandable explanation for each student 

## Technical Skills

<div id="tags" class="d-flex flex-wrap mx-xl-2">
  {% assign tags = '' | split: '' %}
  {% for t in site.tags %}
    {% assign tags = tags | push: t[0] %}
  {% endfor %}

  {% assign sorted_tags = tags | sort_natural %}

  {% for t in sorted_tags %}
    <div>
      <a class="tag" href="{{ t | slugify | url_encode | prepend: '/tags/' | append: '/' | relative_url }}">
        {{ t -}}
        <span class="text-muted">{{ site.tags[t].size }}</span>
      </a>
    </div>
  {% endfor %}
</div>

## Languages

- Japanese
- Spanish

## References

- David Hayes, _Owner, Black Brick Software_, [david@blackbrick.software](mailto:david@blackbrick.software), (308) 660-4654
- Adrian Sanabria-Diaz, _Owner, Tiempo LLC_, [adrian@tiempo.llc](mailto:adrian@tiempo.llc), (308) 830-1195
- Dr. Sherri Harms, _Former Chair, UNK CSIT Department_, [sherriweitlharms@creighton.edu](mailto:sherriweitlharms@creighton.edu), (402) 280-4061
- Keri Pearson, _Program Coordinator, Learning Commons_, [pearsonka@unk.edu](mailto:pearsonka@unk.edu), (308) 865-8728

