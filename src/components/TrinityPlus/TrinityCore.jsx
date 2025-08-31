import { useEffect } from 'react'
import TrinityCore from "./TrinityCore/page.js"

function Trinitycore() {
  useEffect(() => {
    // Load the CSS and store reference
    import("./TrinityCore/styles/globals.css");
    
    // Create a style element to track this page's CSS
    const pageMarker = document.createElement('style');
    pageMarker.id = 'trinity-page-marker';
    pageMarker.textContent = '/* Trinity Core Page Active */';
    document.head.appendChild(pageMarker);
    
    // Handle back button
    const handlePopState = () => {
      // Remove the page marker
      const marker = document.getElementById('trinity-page-marker');
      if (marker) marker.remove();
      
      // Remove any injected styles from this page
      const injectedStyles = document.querySelectorAll('style[data-styled], style[data-emotion]');
      injectedStyles.forEach(style => style.remove());
      
      // Let navigation proceed normally
      // The CSS conflicts should be resolved by removing the problematic styles
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      const marker = document.getElementById('trinity-page-marker');
      if (marker) marker.remove();
    };
  }, []);

  return (
    <TrinityCore/>
  )
}

export default Trinitycore