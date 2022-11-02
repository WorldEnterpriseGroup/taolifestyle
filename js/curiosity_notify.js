    // IGNITE CURIOSITY NOTIFICATION

    // Include this file on a page when you have Sweet Alert 2 installed 
    // to notify users that you would like them to help fix the page on Github. 
    // This works for any site using Github Pages.
    
    
    var repo = 'TaoFruit/taolifestyle'; // Update the values below to include the Organization and Repo on Github
    var curPage = document.URL.split('/').pop(); // Automatically gets the name of the file.  Currently doesn't work on sub-domains or subfolders.

    Swal.fire({
        title: '<img src="https://notehive.org/images/logo/notehive.svg" width="340px"><br><br>',
        icon: '',
        html:
            '<iframe width="380" height="215" src="https://www.youtube.com/embed/5Nw2vRY9q8k?list=PLTEcibljmTPBYIJDALifqry_c9Vqljwzp" title="Note Hive Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' +
            '<button type="button" class="swal22 swal2-styled" aria-label="" style="border-left-color: rgb(00, 00, 00); border-right-color: rgb(0, 0, 0);">Join Note Hive</button><br><br>' +
            'Join us for Experiential Learning Opportunities<br>' +
            'Make Contributions &amp; Build Your Portfolio!<br><br>' +
            'We build open source projects and collaborate<br>' +
            'with content creators worldwide.<br><br>' +
            '<h6>Affiliated with the following Organizations</h6>' +
'<div class="row">' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "></div>' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "><img src="https://notehive.org/images/affiliate/usaid.svg" alt=""></div>' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "><img src="https://notehive.org/images/affiliate/doe.svg" alt=""></div>' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "><img src="https://notehive.org/images/affiliate/nsf.svg" alt=""></div>' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "><img src="https://notehive.org/images/affiliate/hhs.svg" alt=""></div>' +
'<div class="col-xs-3 col-sm-2 col-md-2 col-lg-2 reviews_logo "></div>' +
'</div>',
        footer: 'Copyright &copy; 2022. All Rights Reserved',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-github" aria-hidden="true"></i> Edit This Page on Github',
        cancelButtonText:
            'Hide Notification'
        }).then((result) => {
            if (result.value) {
                var editPage = 'https://github.com/' + repo + '/blob/gh-pages/' + curPage;
                window.open(editPage);
            }
        })
