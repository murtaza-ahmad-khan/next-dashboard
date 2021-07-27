const dashboardRoutes = [
  {
    title: "Dashboard",
    iconName: "Dashboard",
    link: "/admin",
  },
  {
    title: "Products",
    iconName: "Category",
    children: [
      {
        title: "Add Product",
        iconName: "AddCircle",
        link: "/admin/products/productForm",
      },
      {
        title: "Products",
        iconName: "Category",
        link: "/admin/products",
      },
    ],
  },
  {
    title: "Categories",
    iconName: "Category",
    children: [
      {
        title: "Add Category",
        iconName: "AddCircle",
        link: "/categories/add",
      },
      {
        title: "Categories",
        iconName: "Category",
        link: "/categories",
      },
    ],
  },
];

export default dashboardRoutes;
