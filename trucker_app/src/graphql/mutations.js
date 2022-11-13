/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      item
      price
      orders {
        id
        price
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ordersDriverId
      }
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrdersId
      cartDriverId
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      item
      price
      orders {
        id
        price
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ordersDriverId
      }
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrdersId
      cartDriverId
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      item
      price
      orders {
        id
        price
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ordersDriverId
      }
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrdersId
      cartDriverId
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
      id
      price
      quantity
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ordersDriverId
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
      id
      price
      quantity
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ordersDriverId
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
      id
      price
      quantity
      Driver {
        id
        fName
        lName
        uName
        email
        passWd
        points
        phoneNumber
        sponsorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ordersDriverId
    }
  }
`;
export const createCatalog = /* GraphQL */ `
  mutation CreateCatalog(
    $input: CreateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    createCatalog(input: $input, condition: $condition) {
      id
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCatalog = /* GraphQL */ `
  mutation UpdateCatalog(
    $input: UpdateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    updateCatalog(input: $input, condition: $condition) {
      id
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCatalog = /* GraphQL */ `
  mutation DeleteCatalog(
    $input: DeleteCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    deleteCatalog(input: $input, condition: $condition) {
      id
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      price
      desc
      catalog_ID
      Catalog_Product_ID
      catalogID
      ordersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      price
      desc
      catalog_ID
      Catalog_Product_ID
      catalogID
      ordersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      price
      desc
      catalog_ID
      Catalog_Product_ID
      catalogID
      ordersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      phoneNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      phoneNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      phoneNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
    $input: CreateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    createSponsor(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      passWd
      email
      phoneNumber
      accessLevel
      company
      Drivers {
        nextToken
        startedAt
      }
      Catalog {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sponsorCatalogId
    }
  }
`;
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
    $input: UpdateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    updateSponsor(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      passWd
      email
      phoneNumber
      accessLevel
      company
      Drivers {
        nextToken
        startedAt
      }
      Catalog {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sponsorCatalogId
    }
  }
`;
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
    $input: DeleteSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    deleteSponsor(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      passWd
      email
      phoneNumber
      accessLevel
      company
      Drivers {
        nextToken
        startedAt
      }
      Catalog {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sponsorCatalogId
    }
  }
`;
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      points
      phoneNumber
      sponsorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      points
      phoneNumber
      sponsorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
      id
      fName
      lName
      uName
      email
      passWd
      points
      phoneNumber
      sponsorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
