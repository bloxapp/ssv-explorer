class ApiParams {
  static PER_PAGE: number = 10;
  static DEFAULT_PAGINATION = {
    page: 1,
    pages: 1,
    perPage: ApiParams.PER_PAGE,
    total: 0,
  };

  /**
   * Try to parse page value from the url
   */
  static getInteger(entity: string, name: string, defaultValue?: number): number {
    try {
      ApiParams.initStorage();
      const params = ApiParams.getFromStorage(entity);
      const param = parseInt(String(params[name] ?? defaultValue), 10);
      ApiParams.saveInStorage(entity, name, param);
      return param;
    } catch (e) {
      return defaultValue ?? 0;
    }
  }

  /**
   * Get value from storage
   * @param name
   */
  static getFromStorage(name: string): any {
    ApiParams.initStorage();
    return ApiParams.getStorage()[name];
  }

  /**
   * Save value in storage
   * @param entity
   * @param name
   * @param value
   */
  static saveInStorage(entity: string, name: string, value: any) {
    ApiParams.initStorage();
    const storage = this.getStorage();
    storage[entity] = storage[entity] || ApiParams.DEFAULT_PAGINATION;
    storage[entity][name] = value;
    localStorage.setItem('params', JSON.stringify(storage));
  }

  /**
   * Get all storage
   */
  static getStorage() {
    ApiParams.initStorage();
    return JSON.parse(<string>localStorage.getItem('params'));
  }

  /**
   * Initialize storage
   */
  static initStorage() {
    if (!localStorage.getItem('params')) {
      localStorage.setItem('params', JSON.stringify({
        validators: {
          page: 1,
          perPage: ApiParams.PER_PAGE,
        },
        operators: {
          page: 1,
          perPage: ApiParams.PER_PAGE,
        },
        'operator:validators': {
          page: 1,
          perPage: ApiParams.PER_PAGE,
        },
      }));
    }
  }
}

export default ApiParams;
