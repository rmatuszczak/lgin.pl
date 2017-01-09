function initMap() {
        var lgin = {lat: 51.876995, lng: 16.246049};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: lgin
        });
        var marker = new google.maps.Marker({
          position: lgin,
          map: map
        });
      }
