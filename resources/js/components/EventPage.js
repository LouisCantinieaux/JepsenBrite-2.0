import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class EventPage extends Component {
  render() {
    return (
      <div className="eventPage mt-3">
        <div className="coverImage">
          <div className="box6">
              <img src="https://ds1.static.rtbf.be/image/media/object/default/16x9/1248x702/1/e/5/1e5bfc34bbdb4bd522525e5d65bfe5fc.jpg" alt=""/>
              <div className="box-content">
                  <h2 className="title">Fête à la saucisse</h2>
                  <span className="post">José Legrand</span>
                  <ul className="icon">
                    <li><p className="date">20 Octobre 2019</p></li>
                    <li><p className="hours">De 8h30 à 16h30</p></li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="eventContent mt-2 ml-3">
          <p className="eventTitle">[20 Oct. 19] Fête à la saucisse</p><span className="eventAuthor" > By José Legrand </span>
          <h2 className="descriptionTitle mt-5">Event description:</h2>
          <p className="description mr-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis orci sed nunc feugiat, eu feugiat neque tincidunt. Etiam vehicula non leo ut interdum. Donec fringilla enim ligula, in auctor enim viverra in. Phasellus dignissim varius eros ac commodo. Sed blandit turpis urna, non aliquam ipsum dapibus ac. Praesent at purus ac augue consequat pulvinar. Integer posuere fermentum magna nec semper. Sed condimentum consequat mi, in rhoncus sem elementum a. Duis porta urna sed massa consequat faucibus. Mauris libero lacus, dapibus sit amet ipsum ut, tempus rhoncus elit. Mauris vehicula ante eget ipsum egestas consequat. Donec eget nisi a lacus bibendum faucibus ac a libero. Cras egestas nibh ac sem fringilla, non sagittis nunc iaculis. Cras malesuada rutrum mauris, quis fermentum diam fringilla eget.

            In sodales pellentesque diam vitae tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quam odio, lacinia ac turpis a, sodales interdum lorem. Suspendisse eu viverra ex. Curabitur ac erat semper, varius est id, rutrum arcu. Nulla suscipit ultrices elit, fringilla porttitor ex. Suspendisse in nisl vel dolor ullamcorper condimentum sed eu nunc. Nam convallis efficitur ligula, nec luctus purus.

            Quisque aliquam interdum massa, ut laoreet metus vestibulum vitae. Phasellus eget sem finibus, aliquet augue ut, suscipit libero. Quisque non massa a ipsum convallis volutpat eu a ipsum. Nam fermentum porttitor ligula, nec semper nisi volutpat ac. Ut eget est et ligula luctus varius. Ut hendrerit ex in tincidunt auctor. Nunc tempus diam felis, ac pellentesque ipsum euismod at. Cras vitae nulla urna. Nam placerat mi nisl, condimentum accumsan ante varius non. Donec a ultrices est. Mauris metus lorem, blandit sed egestas quis, gravida sit amet justo. Phasellus consectetur tincidunt ante sed maximus. Sed luctus pharetra metus, eget porttitor arcu sagittis sit amet. Quisque rutrum metus vitae congue pharetra. Sed metus mi, convallis quis tellus et, porta placerat enim.

            Praesent viverra augue erat, sit amet viverra metus lacinia ac. Nunc vel auctor neque, sodales semper turpis. Nam purus justo, varius vitae mauris eget, sagittis fringilla lorem. Vivamus sit amet lorem tristique, lacinia sem et, commodo tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sagittis eros in nisi ullamcorper, non gravida nisl lacinia. Pellentesque diam eros, lobortis lacinia quam ut, mollis pharetra orci. Etiam dignissim ornare turpis, vel auctor lacus mattis id. Curabitur tincidunt odio purus, quis auctor quam malesuada ac. Sed facilisis mattis ornare. Cras et tortor euismod, tempus odio in, malesuada nisi. Ut vitae dignissim ligula, et facilisis lorem. Curabitur id augue est. Praesent semper sagittis mi, ac bibendum sapien pulvinar id.

            Nam non malesuada nisl. Nullam ut eleifend erat, eget ultrices libero. Quisque felis urna, pharetra eget urna ac, ultricies efficitur metus. Nullam id nulla purus. Nullam iaculis ex diam, id feugiat erat dictum sed. Suspendisse potenti. Nullam vitae nisl nisl. Nulla id nunc ut enim efficitur sodales. Sed rhoncus pretium arcu nec lacinia. Pellentesque tempus ipsum at magna scelerisque posuere. Pellentesque eu ex nisl. Aenean id orci non lorem ultricies maximus quis vitae diam. Integer scelerisque nisi et leo imperdiet eleifend. In efficitur dapibus leo, a placerat est hendrerit at.

            DONC VIENDÉ SIVOUPLAI !!
          </p>

          <Button>I want to participate</Button>

          <h3 className="mt-3">Participants (5):</h3>
          <div className="participants">
            <div className="participant text-center">
              <img className="ofc rotate" src="https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000" />
              <p>Bill</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="http://jactiv.ouest-france.fr/sites/default/files/imagecache/article-detail/images/2018/04/11/SI_6185723_1.jpg" />
              <p>Angèle</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://www.ballecourbe.ca/wp-content/uploads/2015/10/jcv-960x540.png" />
              <p>Jean-Claude</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://www.nouvelordremondial.cc/wp-content/uploads/2018/07/durif-pas-mort.jpg" />
              <p>Sylvain</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://basketswag.files.wordpress.com/2016/03/eddy-malou-generator.jpg?w=200" />
              <p>Eddy</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
