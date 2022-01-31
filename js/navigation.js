export default function Navigation() {
  const allPages = document.querySelectorAll('[data-page]');
  const allButtons = document.querySelectorAll('[data-nav]');
  console.log(allPages);
  console.log(allButtons);

  // Schaue in jedem button und halte bei jedem einzelnen Button an
  allButtons.forEach(button => {
    // dann überprüfe den einzelnen button ob er geklickt wird
    button.addEventListener('click', event => {
      // wenn geklickt dann soll er zu allen Häusern gehen und bei jedem einzelnen Haus stehen bleiben
      allPages.forEach(page => {
        // nun soll jedes einzelne Haus das Licht ausmachen und somit nicht mehr sichtbar sein
        page.classList.add('hide');
      });

      // Nun soll jeder Name wo wir aktuell klingeln gespeichert werden
      const currentButton = event.currentTarget.getAttribute('data-nav');
      console.log(currentButton);
      // Dieser gespeicherte Name soll zudem in dem jeweiligen Haus gespeichert werden
      const currentPage = document.querySelector(
        `[data-page="${currentButton}"]`
      );
      console.log(currentPage);

      // Das Haus mit dem jeweiligen Namen wo wir aktuell sind soll das Licht anmachen
      currentPage.classList.remove('hide');
      console.log(currentPage);
    });
  });
}
