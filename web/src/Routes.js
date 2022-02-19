// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/job" page={JobPage} name="job" />
        <Route path="/jobs" page={JobsPage} name="jobs" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/showcase" page={ShowcasePage} name="showcase" />
        <Route path="/examples" page={ExamplesPage} name="examples" />
        <Route path="/" page={HomePage} name="home" />

        <Route notfound page={NotFoundPage} />
      </Set>
      <Private unauthenticated={'index'}>
        <Set wrap={[AdminLayout]}>
          <Route path="/tags/new" page={AdminTagNewTagPage} name="newTag" />
          <Route path="/tags/{id:Int}/edit" page={AdminTagEditTagPage} name="editTag" />
          <Route path="/tags" page={AdminTagTagsPage} name="tags" />
          <Route path="/tags/{id:Int}" page={AdminTagTagPage} name="tag" />
          <Route path="/showcases/new" page={AdminShowcaseNewShowcasePage} name="newShowcase" />
          <Route path="/showcases/{id:Int}/edit" page={AdminShowcaseEditShowcasePage} name="editShowcase" />
          <Route path="/showcases" page={AdminShowcaseShowcasesPage} name="showcases" />
          <Route path="/authors/new" page={AdminAuthorNewAuthorPage} name="newAuthor" />
          <Route path="/authors/{id:Int}/edit" page={AdminAuthorEditAuthorPage} name="editAuthor" />
          <Route path="/authors/{id:Int}" page={AdminAuthorAuthorPage} name="author" />
          <Route path="/authors" page={AdminAuthorAuthorsPage} name="authors" />
          <Route path="/medias/new" page={AdminMediaNewMediaPage} name="newMedia" />
          <Route path="/medias/{id:Int}/edit" page={AdminMediaEditMediaPage} name="editMedia" />
          <Route path="/medias/{id:Int}" page={AdminMediaMediaPage} name="media" />
          <Route path="/medias" page={AdminMediaMediasPage} name="medias" />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
