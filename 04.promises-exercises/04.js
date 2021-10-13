/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
 function flatMapPromise(promise, asyncTransformer){
    return new Promise((resolve, reject) => {
      promise
        .then((value)=>resolve(asyncTransformer(value)))
        .catch((err)=>reject(err))
    });
  }
  
  /**
   * 
   * EXERCISE 2
   * 
   * @param {Promise} firstPromise 
   * @param {function} slowAsyncProcess 
   */
  function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
    return firstPromise.then(res=>slowAsyncProcess(res));
  }
  
  /**
   * 
   * EXERCISE 3
   * 
   * @param {function} getUserById 
   * @param {function} getOrganizationById 
   */
  function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
    return function getUserByIdWithOrganization(userId){
      return getUserById(userId).then(user=>{
        if(!user){
          return undefined;
        }
        return getOrganizationById(user.organizationId).then(organization => {
          if(!organization){
            return undefined;
          }
          return {...user,organization}  
        })
      })
  
    };
  }
  module.exports = {
    flatMapPromise,
    chainTwoAsyncProcesses,
    makeGetUserByIdWithOrganization,
  };