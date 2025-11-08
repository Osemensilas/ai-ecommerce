const Test = () => {

      const filteredProducts = dbProducts.filter((item) => {
      const matchCategory = category === "All Products" || category.toLowerCase() === item.category.toLowerCase();
      const matchType = !type || (item.typeCategory && item.typeCategory.toLowerCase() === type.toLowerCase());
      const matchesPrice = item.price >= minVal && item.price <= maxVal;
      const matchesBrand = brandSearch === "" || item.brand.toLowerCase().includes(brandSearch.toLowerCase());
      const matchesRating = selectedRatings.length === 0 || selectedRatings.some(r => item.rating >= Number(r));
      const matchesStock = selectedStock.length === 0 || selectedStock.includes(item.stock);
      const matchesDelivery = selectedDelivery.length === 0 || selectedDelivery.includes(item.delivery);
  
      // Group selectedMainCat by field for OR within field, AND across fields
      const groupedFilters = selectedMainCat.reduce((acc, { field, value }) => {
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(value);
        return acc;
      }, {});
      
        const matchMainCategories =
          Object.keys(groupedFilters).every((field) => {
            const productValue = String(item[field])?.toLowerCase();
            return groupedFilters[field].some((val) => val === productValue);
          });
    
        return matchCategory && matchType && matchesPrice && matchesBrand && matchesRating && matchesStock && matchesDelivery && matchMainCategories;
      });
    
      console.log(filteredProducts);
      
        useEffect(() => {
          if (!type) return;
      
          const catFilter = dbProducts.filter(item => item.type === type);
          const uniqueBrands = [...new Set(catFilter.map(item => item.brand))].filter(Boolean);
          const uniqueColors = [...new Set(catFilter.map(item => item.color))].filter(Boolean);
          const uniqueGender = [...new Set(catFilter.map(item => item.sex))].filter(Boolean);
      
          setProductBrand(uniqueBrands);
          setProductColor(uniqueColors);
          setProductGender(uniqueGender);
        }, [type]);
      
        const indexOfLast = currentPage * productsPerPage;
        const indexOfFirst = indexOfLast - productsPerPage;
        const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
      
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
      
        const filterClicked = () => {
          const filterCategory = document.querySelector(`.${styles.productsLeft}`);
          filterCategory?.classList.add(styles.active);
        };
      
        const removeFilter = () => {
          const filterCategory = document.querySelector(`.${styles.productsLeft}`);
          filterCategory?.classList.remove(styles.active);
        };
    return ( 
        <>
        </>
     );
}
 
export default Test;