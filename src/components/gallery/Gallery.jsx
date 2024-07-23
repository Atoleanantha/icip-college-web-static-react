import React, { useState, useLayoutEffect } from "react";
// import data from '../../data/images.json'
import Modal from "../common_components/Modal";
import '../../App.css'
import img0 from '../../images/gallery_img/ga0.jpg'
import img1 from '../../images/gallery_img/ga1.jpg'
import img2 from '../../images/gallery_img/ga2.jpg'
import img3 from '../../images/gallery_img/ga3.jpg'
import img4 from '../../images/gallery_img/ga4.jpg'
import img5 from '../../images/gallery_img/ga5.jpg'
import { Col, Row } from "react-bootstrap";



function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const data = {
    "data": [
      {
        "text": "Description of image is here image1",
        "link": img0
      },
      {
        "text": "Description of image is here image2",
        "link": img1
      },
      {
        "text": "Description of image is here image3",
        "link": img2
      },
      {
        "text": "Description of image is here image4",
        "link": img3
      },
      {
        "text": "Description of image is here image4",
        "link": img4
      },
      {
        "text": "Description of image is here image4",
        "link": img5
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/gallery/IMG-20240129-WA0114.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/gallery/IMG-20240203-WA0202.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/guest_lectures/IMG-20231230-WA0143.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/guest_lectures/IMG-20231212-WA0101.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231204-WA0009.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231204-WA0015.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231204-WA0016.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/1234.jpg"
      },

      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231202-WA0077.jpg"
      }, {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231202-WA0080.jpg"
      }, {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231202-WA0081.jpg"
      }, {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/IMG-20231202-WA0082.jpg"
      }, {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/induction/Coach.jpg"
      },


      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/guest_lectures/IMG_20230923_184048.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/induction/induction2.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/event/placement/drive-1.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/industrial_visit/2022/iv-1.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/industrial_visit/2022/iv-5.jpg"
      },
      {
        "text": "Guest Lecture",
        "link": "https://www.amrutdpharm.org/images/activities/guest_lectures/guest-lectures20.jpg"
      },
      {
        "text": "Description of image is here image4",
        "link": "https://www.amrutdpharm.org/images/activities/guest_lectures/guest-lectures15.jpg"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19lrmukkKAMzwGIuG6mTw6BrwEXZacKbk"
      },

      {
        "link": "https://drive.google.com/thumbnail?id=19jno68WJJrtxBRPqkY_nfy5ZR6DshtdL"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19aMcTDdiRBiGMcnDF30elCDiN1bDjET9"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19Y-03lwtbE5tTaPaXOkK5BgtLUVA0sWn"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19OASfD_G5Sciz_gQpyab5TuYpqLL9hlU"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19Nl9EngSc-IlyoPbOX72Dr_WdLRTLzP4"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19N5aWQbBThRzfnQkgnH0rdwiTGxZVYlh"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=18tJcncMr9uMC5jbOYYqsrQzGcwr7CcC5"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19KNGu6wBVHWy5naajGv6dQrSIZylKDgR"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=19J1K-K_3poxDukhFEMtJpCAIblSvRmIv"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=174vN_0_1u4lQmVZZlQteHqYqD8oMC2E4"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=179HhPw3iUimDl6mK5WpfjNODNGWLrC22"
      },
      {
        "link": "https://drive.google.com/thumbnail?id=179giOWpTOuzz95xLDjokDn3VlaDGlGRX"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17AhVspnLZg-LrPZ3GSQFIAxbOyvoW7g8"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17CMQqIoVWbQF6sqSfkU836oeP5vjDilR"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17DUIrb5pomFpxys05agczZcPw9-Bgx0J"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17REOzs5j9hez5FLJADtPreMRhS4EEhwE"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17bxUkTtKQUfHQgqyU5Oceu6Q_ru7J1T4"
      }, {
        "link": "https://drive.google.com/thumbnail?id=19326L46REQrbyy2SbjlgZRETG2xooNqQ"
      }, {
        "link": "https://drive.google.com/thumbnail?id=19F-88uOChRrqSyhW7J2uwvY4eOWPy5u4"
      }, {
        "link": "https://drive.google.com/thumbnail?id=19-Pnyt5I1Pp9mO71qaothoNLljQvjbnt"
      }, {
        "link": "https://drive.google.com/thumbnail?id=199sfgdrxDZBq9hiCPENuek0StNp5XhKV"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18vU8F_skqE607nQq1QvwdNu03l4B0G3u"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18w9R2f_WSU8tetqz6nTYNF6_LevtqPls"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18txROaOT0c3D8dsT9TcoQ06D1Sh94MiF"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18dIuZG3FS4gZvZQZU3sOY6JEDMbCCvSN"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18fN_kkGj04xx-hKTtH55GI9IHVKuDgLh"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18cFALVRuULy5jMPOp5wTESmZ8P7yofir"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18bFKd-qw7BcqAt4pgRfDVlEmSE_MEJxg"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18UGv11_0Mf2_gNLiEzmbSmfF8nspVY2u"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18a23vECx02MDYsEJlmLZ4HMZyXvEC1zJ"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18Z1r6FJCHA_XXLOXpzP1d7aluweiBxfR"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18R5Spc_BMspk1IwoC3TQ7kBbKfOQgaTk"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18Qv5l3uZrr823fAUME4wPsQWb6q1RSFp"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18JVz3ESekN4gq8acK3UA6W8ALXUMJ_OA"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17wcV23mDl_SBc9GJrBqB7cOyL1Ne9Gsx"
      }, {
        "link": "https://drive.google.com/thumbnail?id=18O1LWgcTZkRh7ssBJ0aDaO27VL4YonRI"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17zHWdOOyATxj4R7lNkqWLjZFdRMhu2Vh"
      }, {
        "link": "https://drive.google.com/thumbnail?id=17rj-wHpmZ__e1S2uzqcuL8dvP1baZV_K"
      },
      { "link": "https://drive.google.com/thumbnail?id=1KPOpukuFJNlerZnAsO0iizv98eN6M76h" },
      { "link": "https://drive.google.com/thumbnail?id=1Q34lOjOiRchob9xG671dYhZDoLDydpXt" },
      { "link": "https://drive.google.com/thumbnail?id=1Q2vn2BdUYB3_cSFyEWjzls3kqeLIQc0T" },
      { "link": "https://drive.google.com/thumbnail?id=1PzXeRfq3Up969FqoQmUnJ4jdySTD3BtB" },
      { "link": "https://drive.google.com/thumbnail?id=1PzRzdQPDrq9gqcVolGKRvHul4lyZqkHl" },
      { "link": "https://drive.google.com/thumbnail?id=1Py2SuFHBD9VU_mDpqU_EUdpnmViW8Ike" },
      { "link": "https://drive.google.com/thumbnail?id=1PtQpsUpNytBdD-UnKn902LGz9TX8lTMa" },
      { "link": "https://drive.google.com/thumbnail?id=1PmM0VLaKMm_t21LksItHRkOHUY_WjCu_" },
      { "link": "https://drive.google.com/thumbnail?id=1Pk3wJz1ZOv89WYzhYd6FXo_eghzJBJ2G" },
      { "link": "https://drive.google.com/thumbnail?id=1Peo1uhJGVMhorP3AjwpzGk4A10k6_A0H" },
      { "link": "https://drive.google.com/thumbnail?id=1Pa_OyGqGDLOEQcICK3LtRNRhLyulS4I-" },
      { "link": "https://drive.google.com/thumbnail?id=1PXp5vk7lEAT64hAP9dcsAzfDCGfJXUN0" },
      { "link": "https://drive.google.com/thumbnail?id=1PTZW6Luu_bf2lLG8RzWr7MHPmT-628lf" },
      { "link": "https://drive.google.com/thumbnail?id=1PNf3dU9j7wo62FUKxWnjaU4oaEcoTER_" },
      { "link": "https://drive.google.com/thumbnail?id=1PNUp4nIjyz0iWbHLgh23nnMpZswpGo7I" },
      { "link": "https://drive.google.com/thumbnail?id=1P7sZXV80YFbh7WmL8uBDV2Jmo17G_qt9" },
      { "link": "https://drive.google.com/thumbnail?id=1P7r3wCMhm1rG-CMcy4q6exdcUsr-X5te" },
      { "link": "https://drive.google.com/thumbnail?id=1OyowObDNE6Ye7ENkdzIGOkwLmC630H3i" },
      { "link": "https://drive.google.com/thumbnail?id=1On9GYUW3xOfaszQW4Bmodf7kuGYyC8qt" },
      { "link": "https://drive.google.com/thumbnail?id=1OmTGENd6JxGJpsCVgoljkl-93TFNkjXv" },
      { "link": "https://drive.google.com/thumbnail?id=1OcaXyKBJstp9Ji8wJaFzYBEZsTE22cgR" },
      { "link": "https://drive.google.com/thumbnail?id=1OaA4OD9nyKINQl_q6AwOVAaPOvgxxf69" },
      { "link": "https://drive.google.com/thumbnail?id=1OXVC1eDQZ8cXcD3XMLZV5NDfIbvoRDtQ" },
      { "link": "https://drive.google.com/thumbnail?id=1OORnuLMdCiV-d-SndeNv-nYwNu8qFK5U" },
      { "link": "https://drive.google.com/thumbnail?id=1OGT-JXi6HIQ34MS97vLoLjmZDxwKiYpd" },
      { "link": "https://drive.google.com/thumbnail?id=1OENApAJeIH_tKLBIYLbNA3LUchsTMQqv" },
      { "link": "https://drive.google.com/thumbnail?id=1ODm00qaZcniNRJuI7znsxSnCjWrzd0rb" },
      { "link": "https://drive.google.com/thumbnail?id=1O71RyxrjStL6b6ev_eI7jKBTjk535li3" },
      { "link": "https://drive.google.com/thumbnail?id=1O2ITxZKuaMvZ-9chzuTfLZrj7GiNViZu" },
      { "link": "https://drive.google.com/thumbnail?id=1NyoJH6cHfyCQpYvs9ojVRRjNQ6lSU8NH" },
      { "link": "https://drive.google.com/thumbnail?id=1Nyk4FBy8HbL5TMiFAk_eVb7krN-qt3j9" },
      { "link": "https://drive.google.com/thumbnail?id=1NvhpezmHGWUFzj7-_kTudfJ-DhGahaln" },
      { "link": "https://drive.google.com/thumbnail?id=1Nu6Q--kh-06YnmczLxPYItbmkwc0ubEZ" },
      { "link": "https://drive.google.com/thumbnail?id=1Nu1YTJgrwy_WLyKmY1ijXQ2Z_BpMgLwU" },
      { "link": "https://drive.google.com/thumbnail?id=1NmOEC8kQPn_FodgixJPtMrZUdtGS_Rrc" },
      { "link": "https://drive.google.com/thumbnail?id=1NiL03dRud7yXowzKX5bd9sajjvnXHQvR" },
      { "link": "https://drive.google.com/thumbnail?id=1NbtwysLYOqkBGWCz4iVsjuLqJTEs8bnF" },
      { "link": "https://drive.google.com/thumbnail?id=1NV3ip4GKYu9cKBa37pfL-uKEzz59ZCoJ" },
      { "link": "https://drive.google.com/thumbnail?id=1NTjGQ7I1z8au-9ULLbcgQI5aDN7iGVAr" },
      { "link": "https://drive.google.com/thumbnail?id=1NNTkEDwOLb7xeKgoqmuiFkeI20jn0_15" },
      { "link": "https://drive.google.com/thumbnail?id=1NEnH5jGf5P5go_8v0w9pxmGqkBROICXv" },
      { "link": "https://drive.google.com/thumbnail?id=1NERaWOlYGrXxL0Xhlgd4Y4wXkQurvEsb" },
      { "link": "https://drive.google.com/thumbnail?id=1NE3iaEJTXkya4i6TwwvST7_yN-JT7xLu" },
      { "link": "https://drive.google.com/thumbnail?id=1N9jb4kYW8nAUvVelmZufTwThfG5t1Yzm" },
      { "link": "https://drive.google.com/thumbnail?id=1MkL6cQeIl253UPQXd7jE78VpCQdSWKpX" },
      { "link": "https://drive.google.com/thumbnail?id=1Mk7WrzY8FDufgS8bo8gJZH7hAYZcdDEn" },
      { "link": "https://drive.google.com/thumbnail?id=1MdMMR19Ll0cfM_rO4u6VHeeTkGL1kxqB" },
      { "link": "https://drive.google.com/thumbnail?id=1Mc8dlWqjI9RMnuLCsZv0eBMq9lkEs8JY" },
      { "link": "https://drive.google.com/thumbnail?id=1M_5gRC8FoxFbdIhF4T9JWILx1ZptYO9s" },
      { "link": "https://drive.google.com/thumbnail?id=1MX8IC8fDywOFXxi8ezjeJWz_9VRZmEeI" },
      { "link": "https://drive.google.com/thumbnail?id=1MUv-dpbz3OrnvsG9j9KG5P5dPR3qYCSl" },
      { "link": "https://drive.google.com/thumbnail?id=1MTSekKD6BrUzQS4p2jYcTBCm3OpC7hs0" },
      { "link": "https://drive.google.com/thumbnail?id=1MRI2sMhiCaoDs69nkr6_Wy_ODW2ioqLb" },
      { "link": "https://drive.google.com/thumbnail?id=1MJxlXCzS8v2oAuF2IJe9Rr0KgXY47D5Y" },
      { "link": "https://drive.google.com/thumbnail?id=1MIESySltmL6Fv6R15AKa6r7GIqXvg7q1" },
      { "link": "https://drive.google.com/thumbnail?id=1MGgvqZuTX_sEQ8QQcva45H9ojXmfsAbz" },
      { "link": "https://drive.google.com/thumbnail?id=1MEUIlnamwfmV0NEOVYGhDEjjp8jVoeCJ" },
      { "link": "https://drive.google.com/thumbnail?id=1M-EIIZ04X3_NDfb2BW57XQhfjywOUB5g" },
      { "link": "https://drive.google.com/thumbnail?id=1LnPH2sd8MHdMEVTdf7Ey1xT9NlQqi4v5" },
      { "link": "https://drive.google.com/thumbnail?id=1LhPCyok_MFBvDQ3V5lMNkuZLPOBSY7RC" },
      { "link": "https://drive.google.com/thumbnail?id=1LdW3fWCZdmSgPDeAeODo5lH5GN_1Nkbv" },
      { "link": "https://drive.google.com/thumbnail?id=1Ld6maSlf5MXowTg5RHFWoVUfVMTJamMN" },
      { "link": "https://drive.google.com/thumbnail?id=1LZMsDa56Jf-Nu_XQIKangR5doDvSPcGJ" },
      { "link": "https://drive.google.com/thumbnail?id=1LVdd6nQg-U5z6NmiD3omodL1L_4kfEeQ" },
      { "link": "https://drive.google.com/thumbnail?id=1LTy65ng7M_zAP48tN4-px4OoU8kpWzLx" },
      { "link": "https://drive.google.com/thumbnail?id=1LT9Mv8ibOMNF_texk5Md4lvInHRAc_uI" },
      { "link": "https://drive.google.com/thumbnail?id=1LQv2pVoygjfG0WshKYMdWpbHAgD4kAEU" },
      { "link": "https://drive.google.com/thumbnail?id=1LJf3ADH6VzbjIvPvMYQLCPfI3Uu7A7WJ" },
      { "link": "https://drive.google.com/thumbnail?id=1LHsANe144PwlZmYDSGXbPZlLO9os-kFk" },
      { "link": "https://drive.google.com/thumbnail?id=1LGURaangYB-1jOEr1JZ4dsqd8MwqBEu_" },
      { "link": "https://drive.google.com/thumbnail?id=1LFtZtTVrU6W4hia-in31YC5-65tZM6c_" },
      { "link": "https://drive.google.com/thumbnail?id=1LA9itTS6ivOYLU0umtIbmOTi-4Zf2TyE" },
      { "link": "https://drive.google.com/thumbnail?id=1L7avEW3NL-ElZRvPRm0GGZ7FuvpUXwk-" },
      { "link": "https://drive.google.com/thumbnail?id=1L2lrM61rvkA9sJov0I3xv7XCJyRcCsS2" },
      { "link": "https://drive.google.com/thumbnail?id=1KuoFQSj1pu5YXeF1-SLJBgiXqvowO1Kp" },
      { "link": "https://drive.google.com/thumbnail?id=1Ks2rckfCDF9vrWzgGXvZ2inPnddoSmM0" },
      { "link": "https://drive.google.com/thumbnail?id=1KohO7ePn_N39yV43OmrKL1Xz31CMa22-" },
      { "link": "https://drive.google.com/thumbnail?id=1KmCa7oS_mT_527nL7IRTqWyQDxsYjv3W" },
      { "link": "https://drive.google.com/thumbnail?id=1KljIEtywMmjcy5CO4unSyIDXIorMu5Ak" },
      { "link": "https://drive.google.com/thumbnail?id=1KlHAIHfheDcaoHlSAxkiPqeiYFUHY7dn" },
      { "link": "https://drive.google.com/thumbnail?id=1KknwDOcjgUcFvLmtSbQ52INiLU_GTJ1Y" },
      { "link": "https://drive.google.com/thumbnail?id=1KirfpMeCka6TUjMWxjgxi8vhdfD1V-EI" },
      { "link": "https://drive.google.com/thumbnail?id=1KZOj_BEnz3J13mdq6va0gvakR9_vEp63" },
      { "link": "https://drive.google.com/thumbnail?id=1KSbiDPEKM8KHHQk7HygQxJ8K1FZT3IHw" },

    ]
  }
  return (
    <div className="wrapper p-1" >
      <Row className="justify-content-center align-items-center">
        <Col md="12" sm='12' style={{ textAlign: "center" }} className="m-1">
          <iframe width="90%" height="400px" src="https://www.youtube.com/embed/2f01mcQ-teE?si=FBmzZuiOuYd4jwUf" title="ICIP GUEST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        <Col md="6" sm='12' style={{ textAlign: "center" }} className="m-1">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SEjyY9QhwFw?si=K9LAFnHthFMorPJO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        {data.data.map((item, index) => (
          <Col xs={3} md={3} sm={4} className="m-1">
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt="https://drive.google.com/thumbnail?id=1PNf3dU9j7wo62FUKxWnjaU4oaEcoTER_"
                height="60%"
                width="100%"
                objectFit="fill"
                onClick={() => handleClick(item, index)}
              />
            </div>
          </Col>
        ))}

      </Row>

      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;