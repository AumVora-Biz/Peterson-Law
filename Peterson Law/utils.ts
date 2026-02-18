export const scrollToElement = (href: string) => {
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const headerOffset = 90; // Adjust for header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    return true;
  }
  return false;
};