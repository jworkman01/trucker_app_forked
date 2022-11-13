/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
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
export const onCreateCatalog = /* GraphQL */ `
  subscription OnCreateCatalog {
    onCreateCatalog {
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
export const onUpdateCatalog = /* GraphQL */ `
  subscription OnUpdateCatalog {
    onUpdateCatalog {
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
export const onDeleteCatalog = /* GraphQL */ `
  subscription OnDeleteCatalog {
    onDeleteCatalog {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin {
    onCreateAdmin {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
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
export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor {
    onCreateSponsor {
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor {
    onUpdateSponsor {
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor {
    onDeleteSponsor {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver {
    onCreateDriver {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver {
    onUpdateDriver {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver {
    onDeleteDriver {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
