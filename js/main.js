//how the web map page is organized
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      /* Style the side navigation */
      .sidenav {
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
      }


      /* Side navigation links */
      .sidenav a {
        color: white;
        padding: 16px;
        text-decoration: none;
        display: block;
      }



      /* Style the content */
      .content {
        margin-left: 200px;
        padding-left: 20px;
      }


      html, body, #map { width: 100%; height: 90%; margin: 0; background: #fff; }

      .legend {
        line-height: 16px;
        width: 140px;
        color: #333333;
        padding: 6px 8px;
        background: white;
        background: rgba(255,255,255,0.5);
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        border-radius: 5px;
    }

    .legend i {
        width: 16px;
        height: 16px;
        float: left;
        margin-right: 8px;
        opacity: 0.9;
    }

    .legend img {
        width: 16px;
        height: 16px;
        margin-right: 3px;
        float: left;
    }

    .legend p {
        font-size: 12px;
        line-height: 16px;
        margin: 0;
    }
