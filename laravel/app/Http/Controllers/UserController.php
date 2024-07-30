<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use Laravel\Sanctum\HasApiTokens;

class UserController extends BaseController
{

    public function __construct()
    {
        // dd('test');
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if ($request->query('id')) {
            
            $get_all_users = User::where('id', $request->query('id'))->get();
        }else {
            $get_all_users = User::all();

        }

        return response()->json([
            'users' => $get_all_users
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        // Validate the incoming request data
        // $request->validate([
            
        // ]);
        // dd($request->all());
        try {
            // $validation = $request->validated();
            // dd($validation);
            
            // Create the user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password), // Encrypt the password before saving
            ]);

            // Return a JSON response indicating success
            return response()->json([
                'status' => 1,
                'data' => $user
            ], 201); // 201 Created

        } catch (\Exception $e) {
            // Return a JSON response indicating an error
            return response()->json([
                'status' => 0,
                'message' => 'User could not be created',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name'] =  $user->name;
   
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }

    public function logout()
    {
        Session::flush();

        Auth::logout();

        return true;
    }

}
